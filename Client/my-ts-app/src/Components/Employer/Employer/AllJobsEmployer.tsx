import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployerJobs,clearEmployerJobs } from "../../../features/axios/redux/slices/employer/employerJobsSlice";
import { employerJobs } from "../../../features/axios/api/employer/jobsByEmployer";
import JobsByEmployer from "../Sections/JobsByEmployer";
import { JobsInterface } from "../../../types/JobInterface";
import { PlusIcon } from "@heroicons/react/24/outline";
import { RootState } from "../../../features/axios/redux/reducers/Reducer";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { EmployerVerificationCheck } from "../../../features/axios/api/employer/EmployerVerificationcheck";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ITEMS_PER_PAGE = 10;

function AllJobsEmployer() {
  const dispatch = useDispatch();
  const deleted = useSelector((state: RootState) => state.employerJobs.change);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const employerAllJobs = useSelector(
    (state: any) => (state.employerJobs.employerJobs.jobs)
  );

  useEffect(() => {
    const fetchJobsAndStore = async () => {
      try {
        const jobs = await employerJobs();
        dispatch(setEmployerJobs(jobs));
      } catch (error: any) {
        throw new Error("failed fetching jobs", error);
      }
    };
    fetchJobsAndStore();
    return () => {
      dispatch(clearEmployerJobs());
    };
  }, [dispatch, deleted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const filterJobs = employerAllJobs?.filter(
    (job: JobsInterface) =>
      job?.title
        ?.toLocaleLowerCase()
        .includes(debouncedSearchQuery?.toLocaleLowerCase()) ||
      job?.employmentType
        ?.toLocaleLowerCase()
        .includes(debouncedSearchQuery?.toLocaleLowerCase()) ||
      job?.location
        ?.toLocaleLowerCase()
        .includes(debouncedSearchQuery.toLocaleLowerCase())
  );

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return (filterJobs).reverse().slice(startIndex, endIndex);
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [isVerified, setIsVerified] = useState<boolean | null >(null);
  useEffect(()=>{
    const checkVerified = async()=>{
    const result = await EmployerVerificationCheck()
    console.log(result,"result");
    if(result?.result){
      setIsVerified(true)
    }else{
      setIsVerified(false)
    }
    }
   checkVerified()
  },[])



  return (
    <Card className="h-full w-full">
      <div className="">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="mb-4">
            {isVerified ?(<Link to={"/job/create-job"}>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-brown-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <PlusIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  Post Job
                </button>
              </Link>): (
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
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                color="brown"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} crossOrigin={undefined}              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <div>
            {filterJobs &&
              getPaginatedData()?.map((job: JobsInterface) => (
                <JobsByEmployer key={job._id} jobs={job} />
              ))}
          </div>
        </CardBody>
        <ToastContainer />
      </div>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of{" "}
          {Math.ceil(filterJobs?.length / ITEMS_PER_PAGE)}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="brown"
            size="sm"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="brown"
            size="sm"
            onClick={() => changePage(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filterJobs?.length / ITEMS_PER_PAGE)
            }
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AllJobsEmployer;