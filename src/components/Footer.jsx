import React from 'react'


const Footer = () => (
<footer className="bg-black text-gray-400 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm">© {new Date().getFullYear()} MesobTech — Built with purpose</div>
<div className="flex gap-4 items-center">
<a className="text-lime-400 text-sm" href="#">Privacy</a>
<a className="text-lime-400 text-sm" href="#">Terms</a>
<a className="text-lime-400 text-sm" href="#">LinkedIn</a>
</div>
</div>
</footer>
)


export default Footer