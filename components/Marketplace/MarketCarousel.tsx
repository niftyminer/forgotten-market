import styled from "@emotion/styled";

const Arrows = styled.div`
opacity: 30%;
display: flex;
position: absolute;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 90%;
top: 99%;

@media only screen and (max-width: 600px) {
  width: 100%;
  height: 100%;
  top: auto;
  opacity: 50%;
  margin-left: 0px;
  margin-right: 0px;
}

transition: all 200ms;
`;

const ArrowImage = styled.img`
height: 25px;
width: 25px;
cursor: pointer;
padding: 7px;

background: var(--mediumGray);
border-radius: 30px;
border-style: dashed;
border-width: 1px;
border-color: var(--darkGray);

@media only screen and (max-width: 600px) {
  height: 20px;
  width: 20px;
  padding: 5px;
}

transition: all 200ms;
`;

export default function Carousel({
  keyImage,
  setKeyImage,
  imageUrls,
}: {
  keyImage: number,
  setKeyImage: (image: number) => void;
  imageUrls: string[];
}) {
  return (
    <Arrows className={'dropdown'}>
      <ArrowImage className={'dropdown-image'} 
        src='/static/img/marketplace/arrow_left.png'
        onClick={()=> setKeyImage((keyImage - 1 + imageUrls.length) % imageUrls.length)}
      />
      <ArrowImage className={'dropdown-image'} 
        src='/static/img/marketplace/arrow_right.png' 
        onClick={()=> setKeyImage((keyImage + 1) % imageUrls.length)}
      />
    </Arrows>
  )
}
