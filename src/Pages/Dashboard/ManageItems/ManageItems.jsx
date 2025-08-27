import SectionTile from '../../../Components/SectionTitle/SectionTile'
import useMenu from '../../../hooks/useMenu'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const ManageItems = () => {
    const [menu] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) => {
        // Implement delete functionality here
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert this!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async  (result) => {
            if (result.isConfirmed) {
                const response = await axiosSecure.delete(`/menu/${item._id}`);
                if (response.data.deletedCount > 0) {
                    // Call delete API here
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            }
        })
    }


    return (
        <div>
            <SectionTile subHading={"Manage All Items"} Hading={"Manage Items"} />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image || "https://via.placeholder.com/150"}
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => { handleMakeAdmin(user) }}
                                        className="btn bg-orange-600 btn-xl"
                                    >
                                        <FaEdit className="text-white" />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => { handleDeleteItem(item) }}
                                        className="btn btn-error btn-xl"
                                    >
                                        <MdDelete className="text-white" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageItems
