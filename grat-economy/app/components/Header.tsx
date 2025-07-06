import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

import {
  ConnectWallet,
  // Wallet,
  // WalletDropdown,
  // WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";

export default function Header() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect();

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect({ connector: injected({ target: "metaMask" }) });
    }
  }, [connect]);

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white shadow border-b border-black"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-18 w-auto rounded-md sm:block lg:block"
                    src="/gratitude.png"
                    width="44"
                    height="44"
                    alt="Celo Logo"
                  />
                </div>
                <div className="hidden sm:ml-2  sm:flex sm:space-x-8">
                  <div className="font-bold sm:flex text-xl mt-5">
                    Gratitude Economy
                  </div>
                </div>
                <span>Share daily financial gratitude, earn rewards</span>
              </div> */}

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-19 w-auto rounded-md sm:block lg:block"
                    src="/gratitude.png"
                    width="44"
                    height="44"
                    alt="Platform Logo"
                  />
                </div>

                <div className="hidden sm:ml-2 sm:flex sm:flex-col">
                  <div className="font-bold text-xl">Gratitude Economy</div>
                  <span className="text-sm text-gray-500">
                    Share daily financial gratitude, earn rewards
                  </span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 hide flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!hideConnectBtn && (
                  <ConnectWallet
                  // showBalance={{
                  //   smallScreen: true,
                  //   largeScreen: false,
                  // }}
                  />
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
              >
                Home
              </Disclosure.Button>
              {/* Add here your custom menu elements */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
