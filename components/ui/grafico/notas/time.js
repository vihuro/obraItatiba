import dynamic from "next/dynamic";
import style from "./time.module.css";


const GraficoTime = () => {
    const Chart = dynamic(() => import("react-apexcharts"))

    const OptionsChartLine = {

    }
    const Categories={
        categories:["um","dois","tres","quatro"]
    }
    const SeriesChartLine = [{
        name: ["primeiro", "segundo", "terceiro"],
        data: [
            {x:"Leonardi",y:9445951.35},
            {x:"Unicon",y:12550239},
            {x:"Pellizzer",y:19068684},
            {x:"Avulso",y:2390066}
        ],

    }]

    return (
        <div className={style.container} >
            <div className={style.card} >
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    height={600}
                    width={750}
                />
            </div>



        </div>
    )

}

export default GraficoTime