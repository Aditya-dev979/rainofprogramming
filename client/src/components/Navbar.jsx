// import {Menu } from "lucide-react";
// import React, { useEffect } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import DarkMode from "@/DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Separator } from "@radix-ui/react-dropdown-menu";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//  const {user} = useSelector(store=>store.auth);
//   const [logoutUser, {data, isSuccess, isLoading, error}] = useLogoutUserMutation(); // Note: `isSuccess` and `isLoading`
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       await logoutUser();  // Trigger the logout mutation
//     } catch (err) {
//       console.error("Logout failed", err);
//     }
//   };


  

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data?.message || "User logged out successfully");
//       navigate("/login");  // Navigate to login page
//     }

//     if (error) {
//       toast.error("Logout failed. Please try again.");
//     }
//   }, [isSuccess, error, navigate, data]);

 

//   return (
//     <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
//       {/* Desktop */}
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <div className="flex">
//             {/* <School size={30} className="hidden sm:block" /> */}
//             <h1 className="font-extrabold text-lg sm:text-xl hidden sm:block">
//               RainofProgramming
//             </h1>
//           </div>
//         </div>
//         {/* User Icon */}
//         <div className="flex items-center gap-8">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar>
//                   <AvatarImage src={user?.photoURL || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" }/>
//                   <AvatarFallback>PR</AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem><Link to="my-learning">My Learning</Link> </DropdownMenuItem>
//                   <DropdownMenuItem><Link to="profile">Edit Profile</Link></DropdownMenuItem>
//                   {/* <DropdownMenuItem><Link to="login">Sign up</Link></DropdownMenuItem>  //? show after complete website */}
//                   <DropdownMenuItem onClick={logoutHandler} disable={isLoading ? true : undefined}>Log out</DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {
//                   user.role === "instructor" && (
//                     <>
                    
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem onClick={() => navigate("admin/dashboard")}>Dashboard</DropdownMenuItem>
//                     </>
//                   )
//                 }
              
//                 <DropdownMenuSeparator />
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="hidden sm:flex items-center gap-2">
//               {/* Hidden on mobile screens */}
//               <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
//               <Button onClick={() => navigate("/login")}>Signup</Button>
//             </div>
//           )}
//           <DarkMode className="hidden sm:block" />{" "}
//           {/* Hide DarkMode toggle on mobile */}
//         </div>
//         {/* Mobile Menu Trigger */}
//         <div className="sm:hidden flex items-center justify-between w-full">
//           {/* Mobile-specific Logo */}
//           <h1 className="font-extrabold text-2xl">RainofProgramming</h1>
//           {/* Mobile Menu */}
//           <MobileNavbar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// const MobileNavbar = () => {
//   const navigate = useNavigate();
//   const role = "instructor";

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           size="icon"
//           className="rounded-full bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
//           variant="outline"
//         >
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col w-full max-w-xs md:max-w-sm lg:hidden">
//         <SheetHeader
//           className="flex flex-row items-center justify-between mt-2 px-4"
//         >
//           <SheetTitle className="text-lg font-semibold">RainofProgramming</SheetTitle>
//           <DarkMode />
//         </SheetHeader>
//         <Separator className="mr-2 mt-2" />
//         <nav className="flex flex-col space-y-4 mt-4 px-4 text-base md:text-lg">
//           <span className="cursor-pointer hover:text-gray-700">My Learning</span>
//           <span className="cursor-pointer hover:text-gray-700">Edit Profile</span>
//           <span className="cursor-pointer text-red-500 hover:text-red-700">Log Out</span>
//         </nav>
//         {role === "instructor" && (
//           <SheetFooter className="mt-auto px-4 pb-4">
//             <SheetClose asChild>
//               <Button
//                 type="button"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//                 onClick={() => navigate("/admin/dashboard")}
//               >
//                 Dashboard
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          
          <Link to="/">
            <h1 className="hidden md:block font-extrabold text-2xl">
             RainOfProgramming
            </h1>
          </Link>
        </div>
        {/* User icons and dark mode icon  */}
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoURL || "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" }
                    alt="@shadcn"
                  />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <Link to="profile">Edit Profile</Link>{" "}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile device  */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl">RainOfProgramming</h1>
        <MobileNavbar user={user}/>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({user}) => {
  const navigate = useNavigate();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle> <Link to="/">RainOfProgramming</Link></SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <Link to="/my-learning">My Learning</Link>
          <Link to="/profile">Edit Profile</Link>
          <Link to="/login">Sign up</Link>
          <p>Log out</p>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={()=> navigate("/admin/dashboard")}>Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
