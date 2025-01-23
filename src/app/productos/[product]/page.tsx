interface Props {
  product: string;
}

const page = ({ product }: Props) => {
  console.log({ product });
  return (
    <div>
      <h1>{product}</h1>
    </div>
  );
};

export default page;
