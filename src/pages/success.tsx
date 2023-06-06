import React from 'react'
import { SuccessContainer } from '../styles/pages/success'
import { ImageContainer } from '../styles/pages/success'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

const Success = ({ customerName, product }: SuccessProps) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt='' />
        </ImageContainer>

        <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> the Limits já está a caminho da sua casa. </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export default Success

// Cliente-side (useEffet) / getServerSideProps / getStaticProps

// getStaticProps - não faz sentido pois a info (url params) é dinamica, vem da url

// useEffet - se fizer por useEffect, tem que pensar numa tela de loading e o problema que a api do stripe não permite chamadas checkout session
//pelo cliente side por não ser seguro.

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {


  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }

    }
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product! as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }

}