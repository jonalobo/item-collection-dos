import React from 'react'

const Form = ({handleChange, userData, placeOrder}) => {
    return (
            <form onChange={handleChange} className='mt-6 w-8/12 m-auto'>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Enter your email"
                        defaultValue={userData.name}>
                    </input>
                </div>

                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="email"
                        name="repEmail"
                        id="repEmail"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Repeat your email"
                        defaultValue={userData.repEmail}>
                    </input>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Enter your name"
                            defaultValue={userData.name}>
                        </input>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Phone Number "
                            defaultValue={userData.phone}>
                        </input>
                    </div>
                </div>

                <button
                    onClick={placeOrder}
                    disabled={!(userData.name !== ''
                        && userData.phone !== ''
                        && userData.email === userData.repEmail
                        && userData.phone.length > 5
                    )}
                    className="btn btn-primary btn-block w-48 mb-5">
                   Place Order
                </button>
            </form>
    )
}

export default Form