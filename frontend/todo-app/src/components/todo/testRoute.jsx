import React, {Component} from 'react'

class testRoute extends Component {
    render() {
        return (
            <>
                <head>
                    <title></title>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


                </head>
                <body>

                <style>
                </style>

                <div>
                    <section className="section-main" id="section-main"
                             style="position: absolute; float: left; width: 50%;">
                        <header>
                            <h1>Amazon Connect - Custom Implementation of Customer Chat</h1>
                        </header>

                        <form name="contactDetails" id="contactDetails" style="padding-top: 30px">
                            <fieldset>
                                <div>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <label htmlFor="firstName"
                                                       style="width: 128px; padding-right: 25px; padding-bottom: 10px;">Solution
                                                    Example:</label>
                                            </td>
                                            <td>
                                                <input name="firstName" type="text" id="firstName"
                                                       placeholder="First Name"
                                                       style="width:161px;"/>
                                            </td>
                                            <td style="padding-left: 10px;">
                                                <input type="submit" style="padding-left: 10px;" className="submit"
                                                       id="startChat"
                                                       value="Start Chat"> </input>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                    <section className="section-chat" id="section-chat"
                             style="display: none; float: right; width: 50%;">

                            <div id="root"></div>


                    </section>
                </div>

                <script>
                    $(document).ready((a) => {
                    connect.ChatInterface.init({
                        containerId: 'root' // This is the id of the container where you want the widget to reside
                    })}
                });

                    $(function () {
                    $('#contactDetails').submit(function (e) {
                        e.preventDefault();


                        if (!$('#firstName').val()) {
                            alert('you must enter a name & username');
                            document.getElementById("contactDetails").reset();
                        } else {
                            var contactFlowId = "12345678-1234-1234-1234-123456789012"; // TODO: Fill in
                            var instanceId = "12345678-1234-1234-1234-123456789012"; // TODO: Fill in
                            var apiGatewayEndpoint = "https://95o5qhm0ha.execute-api.us-east-1.amazonaws.com/Prod"; // TODO: Fill in with the API Gateway endpoint created by your CloudFormation template

                            console.log("this is the first name:" + $('#firstName').val());
                            document.getElementById("contactDetails").reset();

                            connect.ChatInterface.initiateChat({
                                name: $('#firstName').val(),
                                region: "es-east-1", // TODO: Fill in
                                apiGatewayEndpoint: "https://95o5qhm0ha.execute-api.us-east-1.amazonaws.com/Prod",
                                contactAttributes: JSON.stringify({
                                    "customerName": $('#firstName').val()
                                }),
                                contactFlowId: contactFlowId,
                                instanceId: instanceId
                            }, successHandler, failureHandler);

                        }
                    });
                });

                    function successHandler(chatSession) {
                    console.log("success!")};
                    $('#section-chat').fadeIn(400);

                    chatSession.onChatDisconnected(function(data) {
                    $('#section-chat').hide('slide');
                });
                }

                    function failureHandler(error) {
                    console.log("There was an error: ");
                    console.log(error);
                }
                </script>

                </body>
            </>
        )
    }
}

export default testRoute