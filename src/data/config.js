import cnss from './../assets/images/certifications/cnss.jpg'
import develop from './../assets/images/certifications/develop.jpg'
import pentesting from './../assets/images/certifications/pentesting.jpg'
import remote from './../assets/images/certifications/remoteWork.jpeg'

const expertise = [
    {
        title: 'Frontend',
        skills: [
            {
                name: 'react',
                viewBox: '0 0 32 32'
            },
            {
                name: 'vue',
                viewBox: '0 0 32 32'
            },
            {
                name: 'tailwind',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redux',
                viewBox: '0 0 32 32'
            },
            {
                name: 'typescript',
                viewBox: '0 0 32 32'
            },
            {
                name: 'nextjs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'sass',
                viewBox: '0 -32 256 256'
            }
        ]
    },
    {
        title: 'Backend',
        skills: [
            {
                name: 'nodejs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'expressjs',
                viewBox: '0 0 24 24'
            },
            {
                name: 'firebase',
                viewBox: '0 0 32 32'
            },
            {
                name: 'kafka',
                viewBox: '-78.5 0 413 413'
            },
            {
                name: 'jest',
                viewBox: '0 0 32 32'
            },
            {
                name: 'graphql',
                viewBox: '0 0 32 32'
            }
        ]
    },
    {
        title: 'Database',
        skills: [
            {
                name: 'mysql',
                viewBox: '0 0 24 24'
            },
            {
                name: 'postgresql',
                viewBox: '-4 0 264 264'
            },
            {
                name: 'mongodb',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redis',
                viewBox: '0 -18 256 256'
            }
        ]
    }
]

const urls = [
    {
        name: 'email',
        url: 'mailto:mailto:bilalsheikh2500@gmail.com'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/billypentester/'
    }
]

const edu = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      university: 'COMSATS University Islamabad',
      date: '2019 - 2023',
      city: 'Lahore',
      image: 'https://seeklogo.com/images/C/comsats-university-islamabad-logo-B7C2E461B5-seeklogo.com.png',
      transition: "fade-right"
    },
    {
      id: 2,
      title: 'Intermediate in Computer Science',
      university: 'Punjab Group of Colleges',
      date: '2017 - 2019',
      city: 'Lahore',
      image:'https://seeklogo.com/images/P/punjab-group-of-colleges-logo-0F6CF800F3-seeklogo.com.png',
      transition: "fade-left"
    }
]

const cert = [
    {
      title: 'Certified Network Security Specialist',
      image: cnss
    },
    {
      title: 'Develop Applications with GCP',
      image: develop
    },
    {
      title: 'Advance Peneration Testing',
      image: pentesting
    },
    {
      title: 'Remote Work Certification',
      image: remote
    }
]

export { urls, expertise, edu, cert }

