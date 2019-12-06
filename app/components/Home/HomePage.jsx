import Link from "next/link"

const HomePage = () => {
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>User-Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>email@gmail.com</td>
                            <td>0784545831</td>
                            <td>
                                <span className="admin-User">Admin</span>
                            </td>
                            <td>
                                <Link href={`/edit/1`}>view</Link>
                                <form action={``}>
                                    <input type="hidden" name="id" value={``} />
                                    <button type="button">Delete</button>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>email@gmail.com</td>
                            <td>0784545831</td>
                            <td>
                                <span className="user-User">User</span>
                            </td>
                            <td>
                                <Link href={`/edit/1`}>view</Link>
                                <form action={``}>
                                    <input type="hidden" name="id" value={``} />
                                    <button type="button">Delete</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomePage