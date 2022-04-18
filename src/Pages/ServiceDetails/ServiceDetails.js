import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div className='py-5'>
            <h2 className='text-center mb-4'>You have selected our service no: {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary mx-auto d-block'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;