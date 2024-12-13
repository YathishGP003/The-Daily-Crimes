import Slider from "./Slider"

const Footer = () => {
  return (
    <div>
      <Slider />
      <div className="py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ">
        <a target="_blank">
          Øptímîst〽️ ©
        </a>

        <div className=" flex gap-2 ">
          <a target="_blank" href="https://x.com/YathishGP003">
            Twitter
          </a>
          <span>•</span>
          <a target="_blank" href="https://github.com/YathishGP003">
            Github
          </a>
          <span>•</span>
          <a target="_blank" href="https://in.linkedin.com/in/yathish-g-p-77434325a">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
