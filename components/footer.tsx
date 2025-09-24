import { FC } from 'react';

interface Props {
  year: number;
}

const Footer: FC<Props> = (props: Props) => {
  const { year } = props;
  return (
    <footer className="bg-black text-white py-10 justify-evenly  bottom-0 w-full">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">


{/* Logo and About */}
<div>
<div className="flex items-center space-x-2 mb-4">
<img src="/NEW.png" alt="Nike Logo" className="h-6" />
<span className="text-xl font-semibold">Street Wear</span>
</div>
<p className="text-gray-400 text-sm mb-6">
Get shoes ready for the new term at your nearest store. Find Your perfect Size In Store. Get Rewards
</p>

</div>


{/* Products */}
<div>
<h3 className="text-lg font-semibold mb-4">Products</h3>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a href="#" className="hover:text-white">Air Force 1</a></li>
<li><a href="#" className="hover:text-white">Air Max 1</a></li>
<li><a href="#" className="hover:text-white">Air Jordan 1</a></li>
<li><a href="#" className="hover:text-white">Air Force 2</a></li>
<li><a href="#" className="hover:text-white">Nike Waffle Racer</a></li>
<li><a href="#" className="hover:text-white">Nike Cortez</a></li>
</ul>
</div>


{/* Help */}
<div>
<h3 className="text-lg font-semibold mb-4">Help</h3>
<ul className="space-y-2 text-gray-400 text-sm">
<li><a href="#" className="hover:text-white">About us</a></li>
<li><a href="#" className="hover:text-white">FAQs</a></li>
<li><a href="#" className="hover:text-white">How it works</a></li>
<li><a href="#" className="hover:text-white">Privacy policy</a></li>
<li><a href="#" className="hover:text-white">Payment policy</a></li>
</ul>
</div>


{/* Get in Touch */}
<div>
<h3 className="text-lg font-semibold mb-4">Get in touch</h3>
<p className="text-gray-400 text-sm mb-2">customer@streetwear.com</p>
<p className="text-gray-400 text-sm">+92554862354</p>
</div>


</div>


{/* Bottom Section */}
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm">
<p>© Copyright. All rights reserved.</p>
<a href="#" className="hover:text-white mt-4 md:mt-0">Terms & Conditions</a>
</div>
</footer>
  );
};

export default Footer;