import React, { useEffect, useState } from 'react';
import WorkPro from '../WorkPro/WorkPro';
import './WorkProcess.css'

const WorkProcess = () => {
    const [processes, setProcesses] = useState([])
    useEffect(() => {
        fetch('./workProcess.json')
            .then(res => res.json())
            .then(data => setProcesses(data))
    }, [])
    return (
        <div className="work-process">
            <h5 className="about">Work Process</h5>
            <h2>How SHAKIB'S CARE work?</h2>
            <p>We provide treatment for depression, anxiety, phobias, panic disorders,
                eating disorders, <br /> stress related problems, relationship problems, and severe mental disorders.</p>
            <div className="row mt-4">
                {
                    processes.map(process => <WorkPro key={process.id} process={process}></WorkPro>)
                }
            </div>
            <br /> <br /> <br /> <br />


        </div>
    );
};

export default WorkProcess;