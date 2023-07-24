import {useState} from 'react'
import TutorHub from './../assets/images/tutorhub.png'
import DEX from './../assets/images/dex.png'



const workData = [
    {
        title: 'TutorHub',
        image: TutorHub,
    },
    {
        title: 'Decenteralized Exchange',
        image: DEX,
    },
    {
        title: 'Project 3',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 4',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 5',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 6',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 7',
        image: 'https://placehold.co/600x400',
    },
    {
        title: 'Project 8',
        image: 'https://placehold.co/600x400',
    }
]


const Work = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <section id="work" className="my-20 mx-10">
            <h1 className='text-5xl tracking-tight text-gray-800 leading-tight font-semibold my-3'> Work I've done </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    workData.map((work, index) => (
                        <WorkCard key={index} title={work.title} image={work.image} toggleModal={toggleModal} />
                    ))
                }
            </div>
            {
                modalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
                        <div className="modal-box p-4">
                            <button className="btn btn-outline" onClick={toggleModal}>
                            Close
                            </button>
                            <img src={modalImage} alt="Image" className="w-full h-full" />
                        </div>
                    </div>
                )
            }
        </section>
    )
}

const WorkCard = ({title, image, toggleModal}) => {
    return (
        <div className="">
            <img src={image} alt="" className="rounded-2xl shadow-lg w-64 h-40" id="openModal" class="cursor-pointer" onClick={toggleModal} />
            <h1 className="text-lg font-medium m-3"> {title} </h1>
        </div>
    )
}

export default Work
