import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    useQuery: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user an admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: `${user.name} is now an admin!`,
                text: "User has been made an admin.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleDelete = (user) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };
  

  return (
    <div>
      <div>
        <div className="flex flex-col text-center justify-center">
          {/* Cart Title */}
          <h2 className="text-amber-500 font-medium text-2xl">
            ---How many---
          </h2>

          {/* Divider before text */}
          <div className="flex justify-center">
            <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-black">
            Manage All Users: ({users.length})
          </h1>

          {/* Divider after text */}
          <div className="flex justify-center">
            <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
          </div>
        </div>
        {/* user data show  */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>#</label>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            {user.photo ? (
                              <>
                                <img
                                  src={user.photo}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg"
                                  alt=""
                                />
                              </>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm opacity-50">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{user.email}</div>
                    </td>
                    <td>
                     {user.role === 'admin' ? 'Admin' : <button onClick={() => {handleMakeAdmin(user)}}
                        className="btn bg-orange-600 btn-xl"
                      >
                        <FaUsers className="text-white" />
                      </button>}
                    </td>
                    <th>
                      <button
                      onClick={() => {handleDelete(user)}}
                        className="btn btn-error btn-xl"
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
