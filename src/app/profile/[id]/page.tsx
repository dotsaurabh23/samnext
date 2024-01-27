export default function userprofile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2>profile</h2>
            <hr />
            <hr />
            <p className="text-4xl"> Profile page <span
            className="p-2 rounded bg-orange-500"
            >
             { params.id}  
            </span>
            </p>
        </div>
    )
}