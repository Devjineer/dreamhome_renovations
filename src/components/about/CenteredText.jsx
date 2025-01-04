import { aboutText } from "../../constants";
import { IconWrapper, TitleDesc } from "../_common";
import image from "../../assets/images/image0.jpg";

function CenteredText() {
  return (
    <section>
      <TitleDesc
        title="About Dream Home Renovations"
        desc={aboutText}
        containerStyle="text-center w-full padded py-10 lg:py-20"
        titleStyle="font-heading mb-4 text-2xl lg:text-[40px] text-charcoal"
        descStyle="text-sm lg:text-lg leading-relaxed"
      />
      
      <div className="w-full bg-gray-200">
        <img
          src={image}
          alt="Sample Image"
          className="w-full max-w-full h-187"
          loading="lazy"
        />
      </div>
    </section>
  );
}
export default CenteredText;
