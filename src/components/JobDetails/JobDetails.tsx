import React from 'react';
import { handleCountry, handleJobType, handleTag } from '../Job/Job';
import './JobDetails.css';
import calendar from '../../assets/calendar.svg';
import budget from '../../assets/budget.svg';
import location from '../../assets/location.svg';
import moment from 'moment';

interface JobDetailsProps {
  id: number;
  details: any;
}

const JobDetails: React.FC<JobDetailsProps> = (props) => {
  console.log('id', props.id);
  console.log(props.details);

  return (
    <div className="jobDetails">
      <div className="title">
        {props?.details?.title}
      </div>
      <div className="description margin-bottom-20">
        {props?.details?.requirement}
      </div>
      <div className="type">
        {handleJobType(props?.details?.freelance, props?.details?.contract, props?.details?.parttime, props?.details?.fulltime)}
      </div>
      <button className=" font-bold py-5 px-20 rounded">
      </button>
      <div className="divider"></div>
      <div className="tag">客戶名稱</div>
      <div className="author margin-bottom-30">
        {props?.details?.author.display_name}
      </div>
      <div className="tag">工作內容</div>
      <div className="description margin-bottom-30">
        {props?.details?.requirement}
      </div>
      <div className="flex">
        {props?.details?.tags.map((tag: { name: string }, i: number) => (
          handleTag(tag, i)
        ))}
      </div>
      <div className="divider2"></div>
      <div className="infoWrap margin-bottom-30">
        <div className="infoBoxWrap">
          <img className="calendar" src={calendar} alt="calendar" />
          <div className="infoBox">
            <div className="infoTitle">
              工作日期
            </div>
            <div className="info">
              {moment(props?.details?.date_time).format('DD-MM-YYYY')}
            </div>
          </div>
        </div>
        <div className="infoBoxWrap">
          <img className="calendar" src={calendar} alt="calendar" />
          <div className="infoBox">
            <div className="infoTitle">
              工作時間
            </div>
            <div className="info">
              12:00PM - 18:00PM
            </div>
          </div>
        </div>
      </div>
      <div className="infoWrap">
        <div className="infoBoxWrap">
          <img className="location" src={location} alt="location" />
          <div className="infoBox">
            <div className="infoTitle">
              位置
            </div>
            <div className="info">
              {handleCountry(props?.details?.country)}
            </div>
          </div>
        </div>
        <div className="infoBoxWrap">
          <img className="budget" src={budget} alt="budget" />
          <div className="infoBox">
            <div className="infoTitle">
              預算價錢
            </div>
            <div className="info">
              {props?.details?.budget}
            </div>
          </div>
        </div>
      </div>
      <div className="divider2"></div>
      <div className="title align-items-center">
        回應 <span className="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-bold leading-none text-white rounded-full">9</span>
      </div>
      <div className="flex overflow-hidden">
        <img className="avatar inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <img className="avatar inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <img className="avatar inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        <img className="avatar inline-block h-9 w-9 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>
    </div>
  );
}

export default JobDetails;
