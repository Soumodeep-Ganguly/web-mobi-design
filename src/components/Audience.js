import React, { useState } from 'react';

const Audience = () => {
    const [main, setMain] = useState(true);

    const [moderation, setModeration] = useState(false);
    const [label, setLabel] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const [reply, setReply] = useState(false);
    const [anonymous, setAnonymous] = useState(false);
    const [question, setQuestion] = useState(false);
    const [close, setClose] = useState(false);

    const handleMain = () => {
        if(main){
            setMain(false);
            setModeration(false);
            setLabel(false);
            setDownvote(false);
            setReply(false);
            setAnonymous(false);
            setQuestion(false);
            setClose(false);
        }else{
            setMain(true);
            setModeration(true);
            setLabel(true);
            setDownvote(true);
            setReply(true);
            setAnonymous(true);
            setQuestion(true);
            setClose(true);
        }
    }

    return(
        <div className="row justify-content-center mt-5">
            <div className="col-8">
                <div className="row border-bottom form-check form-switch d-flex">
                    <h4 className="text-primary pb-2"><i class="far fa-comments"></i> Audience Q&A</h4>
                    <input className="form-check-input" type="checkbox" value={main} checked={main} defaultChecked={main} onClick={() => handleMain()}/>
                </div>
                <div className="row" style={{ overflowY: 'scroll', maxHeight: '75%'}}>
                    <div className="row">
                        <div className="col-10">
                            <h6>Moderation</h6>
                            <small className="text-muted">Easily review all questions before they go live</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={moderation} defaultChecked={moderation} onClick={(e) => setModeration((moderation)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Labels</h6>
                            <small className="text-muted">Categorize and filter questions</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={label} defaultChecked={label} onClick={(e) => setLabel((label)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Downvotes</h6>
                            <small className="text-muted">Enable downvoting of questions</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={downvote} defaultChecked={downvote}  onClick={(e) => setDownvote((downvote)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Replies</h6>
                            <small className="text-muted">Allow participants to reply or comment on questions</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={reply} defaultChecked={reply} onClick={(e) => setReply((reply)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Anonymous questions</h6>
                            <small className="text-muted">Let your participants send anonymous questions</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={anonymous} defaultChecked={anonymous} onClick={(e) => setAnonymous((anonymous)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Maximum question length</h6>
                            <small className="text-muted">Show number of votes instead of percentage</small>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={question} defaultChecked={question} onClick={(e) => setQuestion((question)?false:true)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <h6>Close Questions</h6>
                            <small className="text-muted">Prevent the participants from sending new questions to your event</small>
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 8 }}>160</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-outline-primary" style={{ borderRadius: 8 }}>240</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary" style={{ borderRadius: 8 }}>300</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-check form-switch mt-2">
                                <input className="form-check-input" type="checkbox" checked={close} defaultChecked={close} onClick={(e) => setClose((close)?false:true)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Audience;