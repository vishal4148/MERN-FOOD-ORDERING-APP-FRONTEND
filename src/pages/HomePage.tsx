import landingImage from "../assets/landing.jpg";
import appDownloadImage from "../assets/appDownload.png"
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Feast Your Eyes on MernEats.com
            </h1>
            {/* <h1 className="text-1xl font-bold tracking-tight text-orange-600">
            Where Every Bite is a Delight
            </h1> */}
            <span className="text-x1">Food is just a click away!!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Oreder Takeaway even Faster !
                </span>
                <span>
                    Download the mernEats App for faster ordering and personalised recommendations.
                </span>
                <img src={appDownloadImage}/>
            </div>
        </div>
    </div>
  )
}

export default HomePage;
