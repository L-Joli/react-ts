import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/jobs/thunk';
import { IRootState } from '../../redux/store';
import JobDetails from '../JobDetails/JobDetails';
import './Job.css';
import fire from '../../assets/fire_white.svg';
import thunder from '../../assets/thunder.svg';
import location from '../../assets/location.svg';
import moment from 'moment';

export const handleJobType = (freelance: number, contract: number, parttime: number, fulltime: number) => {
  const fl = freelance === 1 ? "自由工作｜" : "";
  const ct = contract === 1 ? "合約｜" : "";
  const pt = parttime === 1 ? "兼職｜" : "";
  const ft = fulltime === 1 ? "全職｜" : "";
  const displayType = `${fl}${pt}${ft}${ct}`;
  if (displayType.substring(displayType.length - 1) === "｜") {
    return displayType.substring(0, displayType.length - 1);
  }
}

export const handleTag = (tag: {name:string}, i: number) => {
  if (i <= 1) {
    return (
    <div key={i} className="tagStyle jobTag">
      {tag.name}
    </div>
    )
  }
}


export const handleCountry = (country: number) => {
  if (country === 1) {
    return "香港"
  } else if (country === 2) {
    return "台灣"
  } else if (country === 3) {
    return "星加坡"
  }
}

const Job: React.FC = () => {

  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch])

  const jobList = useSelector((state: IRootState) => state.jobs.jobs);
  const dataByJobId = jobList.find((job) => job.id === id);
  const jobShortList = jobList.slice(0, 5);

  const handleOnClick = (id: number) => {
    setId(id);
  }

  return (
    <>
      <div className="jobsWrap">
        {jobShortList.map((job) => (
          <div key={job.id} className="jobBlock" onClick={() => handleOnClick(job.id)}>
            <div className="flex">
              <div className="promote tagStyle text-white font-bold">
                <img className="fire" src={fire} alt="fire" />
                推廣中
              </div>
              <div className="new tagStyle text-white	font-bold">
                <img className="thunder" src={thunder} alt="thunder" />
                最新
              </div>
            </div>
            <div className="jobTitle">
              {job.title}
            </div>
            <div className="jobDescription">
              {job.requirement}
            </div>
            {console.log(job)}
            <div className="jobAuthor">
              {job.author.display_name}
            </div>
            <div className="jobType">
              {handleJobType(job.freelance, job.contract, job.parttime, job.fulltime)}
            </div>
            <div className="flex greyBorder">
              {job.tags.map((tag, i) => (
                handleTag(tag, i)
              ))}
            </div>
            <div className="jobBoxFooter">
              <div className="locationWrap">
                <img className="location" src={location} alt="location" />
                {handleCountry(job.country)}
              </div>
              <div className="date">
                {moment(job.date_time).format('YYYY年MM月DD日')}
              </div>
            </div>
          </div>
        ))}
        <button>
        顯示更多
        </button>
      </div>
      <JobDetails id={id} details={dataByJobId} />
    </>
  );
}

export default Job;
