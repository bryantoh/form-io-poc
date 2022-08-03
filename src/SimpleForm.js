import React from 'react'; 
import { Form, Errors, Formio } from '@formio/react';
import axios from 'axios'
//import Formio from 'formiojs';

//let form = {"_id":"62e88bcc309a89f262c62d11","type":"form","tags":[],"owner":"62e888419f7ca3ee2b71a4df","components":[{"label":"Name2","tableView":true,"key":"name","type":"textfield","input":true,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","modalEdit":false,"dataGridLabel":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false,"minLength":"","maxLength":"","pattern":""},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"addons":[],"mask":false,"inputType":"text","inputFormat":"plain","inputMask":"","displayMask":"","spellcheck":true,"truncateMultipleSpaces":false,"id":"e0f583c"},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false,"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","modalEdit":false,"dataGridLabel":true,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"addons":[],"size":"md","leftIcon":"","rightIcon":"","block":false,"action":"submit","theme":"primary","id":"erfpqna"}],"revisions":"","_vid":0,"title":"Test Form","display":"form","access":[{"roles":[],"type":"create_own"},{"roles":[],"type":"create_all"},{"roles":[],"type":"read_own"},{"roles":["62e888fc82867bee9f961fcd","62e888fc82867b4620961fd2","62e888fc82867b9f84961fd7"],"type":"read_all"},{"roles":[],"type":"update_own"},{"roles":[],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"submissionAccess":[{"roles":["000000000000000000000000"],"type":"create_own"},{"roles":["000000000000000000000000"],"type":"create_all"},{"roles":["000000000000000000000000"],"type":"read_own"},{"roles":["000000000000000000000000"],"type":"read_all"},{"roles":["000000000000000000000000"],"type":"update_own"},{"roles":["000000000000000000000000"],"type":"update_all"},{"roles":[],"type":"delete_own"},{"roles":[],"type":"delete_all"},{"roles":[],"type":"team_read"},{"roles":[],"type":"team_write"},{"roles":[],"type":"team_admin"}],"controller":"","properties":{},"settings":{},"path":"testform","name":"testForm","project":"62e888fc82867b00b7961fc6","created":"2022-08-02T02:28:28.474Z","modified":"2022-08-02T06:50:19.955Z","machineName":"mdsspulhofylsdl:testForm"};

let formObj = JSON.parse('{"_id":"62e9e98eb3b64cc2bda356dc","type":"form","tags":[],"owner":"62e888419f7ca3ee2b71a4df","components":[{"label":"First Name","tableView":true,"key":"firstName","type":"textfield","input":true},{"label":"Last Name","tableView":true,"key":"lastName","type":"textfield","input":true},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}],"revisions":"","_vid":0,"title":"Simple Form","display":"form","access":[{"roles":["62e888fc82867bee9f961fcd","62e888fc82867b4620961fd2","62e888fc82867b9f84961fd7"],"type":"read_all"}],"submissionAccess":[],"controller":"","properties":{},"settings":{},"name":"simpleForm","path":"simpleform","project":"62e888fc82867b00b7961fc6","created":"2022-08-03T03:20:46.233Z","modified":"2022-08-03T03:20:46.236Z","machineName":"mdsspulhofylsdl:simpleForm"}');

console.log(formObj);

let saveSubmission = (formData) => {
    console.log("fdfsdfs");
    console.log(formData)

    axios.post('http://localhost:3001/simpleform', formData)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    

    // axios({
    //     method: "post",
    //     url: "http://localhost:3001/simpleform",
    //     data: formData,
    //     headers: { "Content-Type": "application/json" },
    //   })

    //let formio = new Formio('https://mdsspulhofylsdl.form.io/simpleform');


    // formio.loadForm((form) => {
    //   console.log(form);
    //   formio.saveSubmission(
    //     formData
    //     {data: {
    //     firstName: 'Joe',
    //     lastName: 'Hi'
        
    //   }}
    //   ).then((submission) => {
    //     console.log(submission);
    //   });
    // });
  };

function SimpleForm(props) {
    return (
        <Form form={formObj} onSubmit={saveSubmission}/>

        // submission={submission} onChange={function() {}} onSubmit={function() {}
    );
}

export default SimpleForm;