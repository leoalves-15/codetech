import visa from '../../assets/payments/visa.svg';
import diners from '../../assets/payments/diners.svg';
import amex from '../../assets/payments/amex.svg';
import boleto from '../../assets/payments/boleto.svg';
import master from '../../assets/payments/master.svg';
import sigilo from '../../assets/certifications/sigilo.svg';
import trustpilot from '../../assets/certifications/trustpilot.svg';
import instagram from '../../assets/social/instagram.svg';
import facebook from '../../assets/social/facebook.svg';
import youtube from '../../assets/social/youtube.svg';
import tiktok from '../../assets/social/tiktok.svg';

export const columns = [
    {
        id: 1,
        title: "Atendimento ao cliente",
        links: [
            {
                label: "Ajuda",
                link: "www.google.com"
            },
            {
                label: "Entre em contato",
                link: "www.google.com"
            },
            {
                label: "Minha Conta",
                link: "www.google.com"
            },
            {
                label: "Meus pedidos",
                link: "www.google.com"
            }
        ]
    },
    {
        id: 2,
        title: "Entrega e reembolsos",
        links: [
            {
                label: "Entregas",
                link: "www.google.com"
            },
            {
                label: "Entregas e prazos",
                link: "www.google.com"
            },
            {
                label: "Pedidos, preços e pagamentos",
                link: "www.google.com"
            },
            {
                label: "Retornos e reembolsos",
                link: "www.google.com"
            }
        ]
    },
    {
        id: 3,
        title: "Políticas",
        links: [
            {
                label: "Termos e condições",
                link: "www.google.com"
            },
            {
                label: "Políticas de Cookies",
                link: "www.google.com"
            },
            {
                label: "Pagamentos",
                link: "www.google.com"
            }
        ]
    }
];

export const paymentFlags = [
    {
        id: 1,
        src: visa,
        title: "visa",
    },
    {
        id: 2,
        src: diners,
        title: "diners",
    },
    {
        id: 3,
        src: master,
        title: "master",
    },
    {
        id: 4,
        src: boleto,
        title: "boleto",
    },
    {
        id: 5,
        src: amex,
        title: "amex",
    }
];

export const certifications = [
    {
        id: 1,
        src: sigilo,
        title: "sigilo",
    }, 
    {
        id: 2,
        src: trustpilot,
        title: "trustpilot",
    }
];

export const socialFooter = [
    {
        id: 1,
        src: instagram,
        title: "instagram",
        link: 'www.google.com'
    }, 
    {
        id: 2,
        src: facebook,
        title: "facebook",
        link: 'www.google.com'
    }, 
    {
        id: 3,
        src: youtube,
        title: "youtube",
        link: 'www.google.com'
    }, 
    {
        id: 4,
        src: tiktok,
        title: "tiktok",
        link: 'www.google.com'
    }
]