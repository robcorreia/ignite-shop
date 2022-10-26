import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1> Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, at
          obcaecati. In sunt sequi veniam debitis libero. Libero, ipsam, laborum
          voluptate tenetur cupiditate fuga eveniet iste doloremque
          exercitationem adipisci hic!
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
