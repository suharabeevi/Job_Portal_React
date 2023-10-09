import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../../../features/axios/redux/slices/user/getAllJobsSlice";
import { RootState } from "../../../features/axios/redux/reducers/Reducer";
import { JobsInterface } from "../../../types/JobInterface";
import { UserInterface } from "../../../types/UserInterface";
import { Navbar, Button, Input } from "@material-tailwind/react";
import { userData } from "../../../features/axios/api/User/userDetails";
 import JobDetails from "./JobDetails";
 import JobList from "./JobList";
import UserSideJobListingShimmer from "../../Shimmer/UserSideJobListingShimmer";
// import { isApplied } from "../../../features/axios/api/user/applyForJob";
import {
  distinctTitleLocationSalary,
  filterJobs,
} from "../../../features/axios/api/User/jobDetails";

function DisplayJobs(this: any) {
  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.allJobs.jobs);
  const status = useSelector((state: RootState) => state.allJobs.status);
  const error = useSelector((state: RootState) => state.allJobs.error);
  const user = useSelector((state: RootState) => state.userDetails.userDetails);
  
  

  const [jobsList, setJobsList] = useState<any>([]);
  // variable for job selection ring
  const [selected, setSelected] = useState("");
  // variables for search searching
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [titles, setTitles] = useState([]);
  const [salaries, setSalaries] = useState([]);
  // variables for filtering
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");

  const [filtered, setFiltered] = useState<any>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  
  // for the scroll behavior of nav
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  useEffect(() => {
    distinctTitleLocationSalary("location", setLocations);
    distinctTitleLocationSalary("title", setTitles);
    distinctTitleLocationSalary("salary", setSalaries);
  }, []);

  useEffect(() => {
    let filterJob = jobs?.filter(
      (job: JobsInterface) =>
        job?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        job?.location?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        job?.employmentType?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    setJobsList(filterJob);
  }, [jobs, searchQuery]);

  const handleFilter = async () => {
    const filteredJobs = await filterJobs(
      selectedTitle,
      selectedLocation,
      selectedSalary
    );
    setFiltered(filteredJobs);
    setIsFiltered(true);
  };
  const [isVerified, setIsVerified] = useState<boolean | null >(null);
  useEffect(()=>{
    const checkVerified = async()=>{
    const result = await userData()
    const sum =result.isActive
    console.log(sum);
    
    if(sum
      ){
      setIsVerified(true)
    }else{
      setIsVerified(false)
    }
    }
   checkVerified()
  },[])
  if (status === "loading") {
    return (
      <div className="p-20">
        <UserSideJobListingShimmer />
      </div>
    );
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {isVerified ?(
        <>
          <div
            className={`fixed top-0 left-0 w-full pt-16 z-30 transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Navbar */}
            <Navbar className="mx-auto max-w-screen-2xl px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <div className="relative flex w-full gap-2 md:w-max">
                  <Input
                    type="search"
                    label="Search here..."
                    color="brown"
                    className="pr-20"
                    containerProps={{
                      className: "min-w-[288px]",
                    }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    crossOrigin={undefined}
                  />
                </div>
                <div className="sm:col-span-1">
                <select
  className="focus:ring-2 focus:ring-brown-600 border-2 rounded-lg py-2 px-4 text-gray-500 max-h-40 overflow-y-scroll"
  value={selectedLocation}
  onChange={(e) => setSelectedLocation(e.target.value)}
>
  <option value="">Select location</option>
  {locations.map((location) => (
    <option key={location} value={location}>
      {location}
    </option>
  ))}
</select>
                </div>
                <div className="sm:col-span-1">
                  <select
                    className="focus:ring-2 focus:ring-brown-600 border-2 rounded-lg py-2 px-4 text-gray-500"
                    value={selectedSalary}
                    onChange={(e) => setSelectedSalary(e.target.value)}
                  >
                    <option value="">Select salary</option>
                    {salaries.map((salary) => (
                      <option key={salary} value={salary}>
                        {salary}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <select
                    className="focus:ring-2 focus:ring-brown-600 border-2 rounded-lg py-2 px-4 text-gray-500"
                    value={selectedTitle}
                    onChange={(e) => setSelectedTitle(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    {titles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
              size="sm"
              className="!absolute right-1 rounded"
              color="brown"
              onClick={() => handleFilter()}
            >
              Filter
            </Button>
                <div className="w-20"></div>
              </div>
            </Navbar>
          </div>
          <div className="p-28 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-wrap min-h-screen">
            <div className="w-full sm:w-2/4 p-4 sm:p-6">
              <div
                className="overflow-y-auto p-6"
                style={{ maxHeight: "calc(100vh - 80px)" }}
              >
                {isFiltered
                  ? filtered.map((job: JobsInterface) => (
                      <JobList
                        key={job._id}
                        jobs={job}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ))
                  : jobsList?.map((job: JobsInterface) => (
                      <JobList
                        key={job._id}
                        jobs={job}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    ))}
              </div>
            </div>
            <div className="w-full sm:w-2/4 p-4 sm:p-6 bg-white">
              <div
                className="overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 80px)" }}
              >
                <JobDetails />
              </div>
            </div>
          </div>
        </>
      ) : (
       
        
        <div
        className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Not Verified!</span> Your
          verification is under process.
        </div>
      </div>
      )}
    </>
  );
}
export default DisplayJobs;