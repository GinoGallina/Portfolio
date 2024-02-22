// eslint-disable-next-line no-undef
export const base = process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/'
export const projectos = [
    {
        nombre: 'Veterinaria',
        link: 'https://veterinaria-pk.up.railway.app/login',
        github: 'https://github.com/GinoGallina/Veterinaria',
        img: `${base}assets/images/vet.png`,
        descripcion:
            'Es una Veterninaria creada con Sprign Boot, que permite la gestion de stock y ventas de productos, la atención de distintos animales y la gestión de pago y deuda a proveedores'
    },
    {
        nombre: 'Bad Dog',
        link: 'https://ginogallina.github.io/PaginaBadDog/',
        github: 'https://github.com/GinoGallina/PaginaBadDog',
        img: `${base}assets/images/bad-dog.png`,
        descripcion: 'Es una landing page básica creada con boostrap5'
    },
    {
        nombre: 'Instagram tracker',
        link: 'https://ig-followers-umber.vercel.app/',
        github: 'https://github.com/GinoGallina/IgFollowers',
        img: `${base}assets/images/logoFollF-5RlIGLq7.png`,
        descripcion:
            'Página cuya función es mostrar tus seguidores, seguidos, las cuentas que no seguís y las que no te siguen en Instagram '
    },
    {
        nombre: 'ChatBot',
        link: 'https://ig-followers-umber.vercel.app/',
        github: 'https://github.com/GinoGallina/IgFollowers',
        img: `${base}assets/images/logoFollF-5RlIGLq7.png`,
        descripcion: 'Chat en tiempo real'
    },
    {
        nombre: 'Gimnasio',
        link: 'https://ig-followers-umber.vercel.app/',
        github: 'https://github.com/GinoGallina/IgFollowers',
        img: `${base}assets/images/logoFollF-5RlIGLq7.png`,
        descripcion:
            'Página para la gestion de turnos de un gimnasio. Probar con: admin@admn.com, user@user.com y contraseñas: 12345678'
    }
]
