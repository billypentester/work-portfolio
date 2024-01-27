import TransSection from '../layouts/TransSection'
import { work } from '../data/config'

const WorkCard = ({title, image}) => {
    return (
        <div>
            <img src={image} alt={title} className="rounded-lg shadow-xl cursor-pointer" loading="lazy"/>
            <h2 className="text-lg font-medium m-3"> {title} </h2>
        </div>
    )
}

const Work = () => {

    return (
        <TransSection id="work" title="Work I've done">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    work.map((work, index) => (
                        <WorkCard key={index} title={work.title} image={work.image} />
                    ))
                }
            </div>
        </TransSection>
    )
}

export default Work
