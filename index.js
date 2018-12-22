
Object.defineProperty(Array.prototype, 'getIndexBy', {
  enumerable: false,
  value: function (name, value) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][name] === value) {
        return i
      }
    }
    return "Excel error"
  }
})

function extractString (str) {
  var a = str.indexOf('_')
  return a
}

function slash(str) {
  var a = str.indexOf('/')
  if (a > 0) {
    return a
  } else {
    a = undefined
  }
}

module.exports = (req,res) => {
  try {
    let input = '';
    req.on('data', chunk => {

      input += chunk.toString();
    
    });
    req.on('end', () => {
      input = JSON.parse(input)
       var template = {
        "SurveyEntry": {
        "SurveyID": "SV_cUtNYiuQqe6z7U1",
        "SurveyName": "Sample-Brand",
        "SurveyDescription": null,
        "SurveyOwnerID": "UR_4N0904w7iKnkxs9",
        "SurveyBrandID": "nyu",
        "DivisionID": null,
        "SurveyLanguage": "EN",
        "SurveyActiveResponseSet": "RS_9uaqudD3ejX98iN",
        "SurveyStatus": "Inactive",
        "SurveyStartDate": "0000-00-00 00:00:00",
        "SurveyExpirationDate": "0000-00-00 00:00:00",
        "SurveyCreationDate": "2018-06-26 06:21:34",
        "CreatorID": "UR_4N0904w7iKnkxs9",
        "LastModified": "2018-06-26 06:21:34",
        "LastAccessed": "0000-00-00 00:00:00",
        "LastActivated": "0000-00-00 00:00:00",
        "Deleted": null
        },
        
        "SurveyElements": [
          {
            "SurveyID": " ",
            "Element": "BL",
            "PrimaryAttribute": "Survey Blocks",
            "SecondaryAttribute": null,
            "TertiaryAttribute": null,
            "Payload": [
              {
                "Type": "Trash",
                "Description": "Trash / Unused Questions",
                "ID": "BL_9TBUfca11PX2Ubb"
              }
            ]
          },

          {
            "SurveyID": " ",
            "Element": "SO",
            "PrimaryAttribute": "Survey Options",
            "SecondaryAttribute": null,
            "TertiaryAttribute": null,
            "Payload": {
            "BackButton": "true",
            "SaveAndContinue": "false",
            "SurveyProtection": "PublicSurvey",
            "BallotBoxStuffingPrevention": "false",
            "NoIndex": "Yes",
            "SecureResponseFiles": "true",
            "SurveyExpiration": null,
            "SurveyTermination": "DisplayMessage",
            "Header": "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script><script>var remove = setInterval(function(){if (document.getElementById('Plug')) {console.log('remove success');document.getElementById('Plug').remove();clearInterval(remove);}}, 1)Qualtrics.SurveyEngine.addOnload(function(){Qualtrics.SurveyEngine.OnEndOfSurvey = function() {console.log('End of survey submit');console.log(this.getQuestionInfo())}});</script>",
            "Footer": "<script>document.getElementById('Plug').remove()</script>",
            "ProgressBarDisplay": "None",
            "PartialData": "+2 weeks",
            "ValidationMessage": null,
            "PreviousButton": "Back",
            "NextButton": "Next",
            "SkinLibrary": "Qualtrics",
            "SkinType": "MQ",
            "Skin": "v4qualtrics9",
            "NewScoring": 1,
            "QuestionsPerPage": "1",
            "PageTransition": "None",
                "CustomStyles": {
              "errorStyles": {
                "selector": ".Skin .ValidationError",
                "styles": {
                  "color": "rgb(231, 63, 97)",
                  "backgroundColor": "transparent",
                  "borderColor": "transparent"
                }
              },
              "errorStylesBG": {
                "selector": ".Skin .HeaderValidationError, .Skin .HeaderValidationError li a",
                "styles": {
                  "color": "rgb(0,0,0)",
                  "backgroundColor": "rgb(231, 63, 97)"
                }
              },
              "pageStyles": {
                "selector": "#SurveyEngineBody",
                "styles": {
                  "backgroundColor": "rgb(12, 2, 18)"
                }
              },
              "textStyles": {
                "selector": ".SkinInner",
                "styles": {
                  "fontFamily": "ms sans-serif, geneva, sans-serif",
                  "fontSize": null,
                  "fontWeight": null,
                  "fontStyle": null,
                  "textDecoration": null,
                  "color": "rgb(67, 70, 77)"
                }
              },
              "questionStyles": {
                "selector": ".Skin .QuestionText",
                "styles": {
                  "fontFamily": "ms serif, new york, sans-serif",
                  "fontSize":"14pt",
                  "fontWeight": "normal",
                  "fontStyle": "normal",
                  "textDecoration": "none",
                  "color": null
                }
              },
              "choiceStyles": {
                "selector": ".Skin .horizontalbar th.ylabel, .Skin .Matrix table td, .Skin .Matrix table th, .Skin .Matrix table thead th, .Skin .Matrix table thead td, .Skin .PGR .DragAndDrop .Items label, .Skin .QuestionBody ul.ChoiceStructure, .Skin .PGR .DragAndDrop .Group ul, .Skin .PGR .DragAndDrop .Group h2, .Skin .PGR .DragAndDrop .Items ul, .Skin .PGR .DragAndDrop .Items h2, .Skin .DD .QuestionBody table.ChoiceStructure, .Skin .PGR .DragAndDrop .NoColumns td.groupsContainerTd div ul, .Skin .PGR .DragAndDrop .NoColumns td.groupsContainerTd div h2, .Skin .SBS thead th, .Skin .SBS td, .Skin .SBS .Answers td, .Skin .SBS .Answers th, .SBS table.ChoiceStructure, .Skin .horizontalbar thead table.LabelDescriptions tr td, .Skin .horizontalbar thead tr td.NotApplicable, .QuestionBody th, .Skin .QuestionBody .MC .MAVR label, .Skin .QuestionBody .MC .SAVR label, .Skin .SBS thead th, .Skin .SBS td, .Skin .RO .DND ul li, .Skin .reg, .SkinInner .ChoiceStructure, .Skin thead, .Skin .GAP .ChoiceStructure thead th, .Skin .GAP .ChoiceStructure .c4, .Skin .GAP .ChoiceStructure th, .Skin .GAP .ChoiceStructure .WhyText, .SkinInner .ChoiceStructure .LightBG, .Skin .QuestionOuter.Highlight .Inner .reg, .Skin .QuestionOuter.Highlight .Inner .alt, .Skin .QuestionOuter.Highlight .Inner .ReadableAlt       ",
                "styles": {
                  "fontFamily": "ms serif, new york, sans-serif",
                  "fontSize":"14pt",
                  "fontWeight": "normal",
                  "fontStyle": "normal",
                  "textDecoration": "none",
                  "color": null
                }
              },
              "headerStyles": {
                "selector": ".Skin div#Header",
                "styles": {
                  "color": "rgb(255, 255, 255)"
                }
              },
              "footerStyles": {
                "selector": ".Skin #Footer",
                "styles": {
                  "color": null
                }
              },
              "questionSeparatorStyles": {
                "selector": ".Skin .Separator",
                "styles": {
                  "backgroundColor": "rgb(231, 231, 233)",
                  "display": "block"
                }
              },
              "highlightStyles": {
                "selector": ".Skin .QuestionOuter.Highlight .Inner, .Skin .QuestionOuter.Highlight .Inner .reg, .Skin .QuestionOuter.Highlight .Inner .alt, .Skin .QuestionOuter.Highlight .Inner .ReadableAlt",
                "styles": {
                  "backgroundColor": "rgb(245, 229, 255)"
                }
              },
              "highlightStylesAlt": {
                "selector": ".Skin .QuestionOuter.Highlight .Inner .ReadableAlt, .Skin .QuestionOuter.Highlight .Inner .LightBG",
                "styles": {
                  "backgroundColor": "rgb(237,221,247)"
                }
              },
              "textEntryStyles": {
                "selector": ".Skin select, .Skin .InputText",
                "styles": {
                  "color": null
                }
              },
              "borderStyles": {
                "selector": ".Skin .CS .horizontalbar table.sliderGrid tr.xlabel th, .Skin .CS .horizontalbar .ylabel, .Skin .CS .horizontalbar table.sliderGrid tr td.value, .Skin .Slider .horizontalbar table.sliderGrid tr.xlabel th, .Skin .BorderColor, .Skin .DarkBorderColor, .Skin .Slider .horizontalbar table.sliderGrid tr td.value, .Skin thead, .Skin .GAP .ChoiceStructure thead th  ",
                "styles": {
                  "borderColor": null
                }
              },
              "altRowStyles": {
                "selector": ".Skin .ReadableAlt, .Skin .LightBG",
                "styles": {
                  "backgroundColor": "rgb(0, 0, 0)"
                }
              },
              "customCSS": "/* Place your CSS here */\n#SurveyEngineBody{background: center center / cover no-repeat fixed !important}.Skin #LogoContainer{display: none !important}.Skin #SkinContent{background: rgba(0,0,0,0) !important;border: none}#Overlay{background: rgba(255,255,255,.2) !important}.Skin #Buttons #NextButton, .Skin #Buttons #PreviousButton{background-color: #3E8F00 !important;background: #3E8F00 !important}.Skin .QuestionOuter.Highlight .Inner, .Skin .QuestionOuter.Highlight .Inner .reg, .Skin .QuestionOuter.Highlight .Inner .alt, .Skin .QuestionOuter.Highlight .Inner .ReadableAlt{background-color: rgba(255, 255, 255, .5) !important}.Skin label.MultipleAnswer.q-checked, .Skin label.SingleAnswer.q-checked{background: #3E8F00 !important;border-color: #000000 !important;color: #fff !important}.Skin label.MultipleAnswer, .Skin label.SingleAnswer{border: 0px;background: rgba(0,0,0,.06)}#Plug{display:none !important}.Skin label.q-radio.q-checked{background-color: #3E8F00 !important}.Skin label.q-checkbox.q-checked{background-color: #3E8F00 !important}.Skin label.q-checkbox, .Skin label.q-radio{border-color: #3E8F00 !important}.Skin .SS .horizontalbar .handle:hover, .Skin .horizontalbar .Slider .handle:hover{background-color: #3E8F00 !important}.Skin .SB input, .Skin .SS .horizontalbar .handle, .Skin .SS .verticalbar .SSTrack .handle, .Skin .horizontalbar .BarContainer:hover .bar, .Skin .horizontalbar .Slider .handle, .Skin .horizontalbar .activated .bar{background-color: #3E8F00 !important}.Skin .TE textarea:focus, .Skin input.TextEntryBox:focus, .Skin input[type=text]:focus, .Skin input[type=password]:focus, .Skin input[type=search]:focus, .Skin select:focus, .Skin textarea:focus{border-color: #3E8F00 !important} .Skin .ReadableAlt {background-color: rgb(234, 234, 234) !important}"
            },
            "HighlightQuestions": "off",
            "EOSMessage": "MS_1SqpzS0mp59u1X7",
            "ShowExportTags": "false",
            "CollectGeoLocation": "false",
            "SurveyTitle": "(Insert your survey name) | Vase Insights",
            "SurveyMetaDescription": "(Insert your survey name) | Vase Insights",
            "PasswordProtection": "No",
            "AnonymizeResponse": "No",
            "Password": "",
            "RefererCheck": "No",
            "RefererURL": "http:\\/\\/",
            "EOSMessageLibrary": "UR_9Ex5XEZcTV1wfaZ",
            "EOSRedirectURL": "https:\\/\\/",
            "EmailThankYou": "false",
            "ThankYouEmailMessageLibrary": null,
            "ThankYouEmailMessage": null,
            "ValidateMessage": "false",
            "ValidationMessageLibrary": null,
            "InactiveSurvey": "DefaultMessage",
            "PartialDataCloseAfter": "LastActivity",
            "InactiveMessageLibrary": "",
            "InactiveMessage": "",
            "ActiveResponseSet": null,
            "AvailableLanguages": {
              "EN": []
            }
          }
          },
          {
            "SurveyID": " ",
            "Element": "SCO",
            "PrimaryAttribute": "Scoring",
            "SecondaryAttribute": null,
            "TertiaryAttribute": null,
            "Payload": {
              "ScoringCategories": [],
              "ScoringCategoryGroups": [],
              "ScoringSummaryCategory": null,
              "ScoringSummaryAfterQuestions": 0,
              "ScoringSummaryAfterSurvey": 0,
              "DefaultScoringCategory": null,
              "AutoScoringCategory": null
            }
          },
          {
            "SurveyID": "SV_8udPDciPxQEKnop",
            "Element": "STAT",
            "PrimaryAttribute": "Survey Statistics",
            "SecondaryAttribute": null,
            "TertiaryAttribute": null,
            "Payload": {
              "MobileCompatible": true,
              "ID": "Survey Statistics"
            }
          },
          {
            "SurveyID": "SV_8udPDciPxQEKnop",
            "Element": "QC",
            "PrimaryAttribute": "Survey Question Count",
            "SecondaryAttribute": "1",
            "TertiaryAttribute": null,
            "Payload": null
          },
          {
            "SurveyID": "SV_8udPDciPxQEKnop",
            "Element": "RS",
            "PrimaryAttribute": "RS_3PCBgOnEZDloDBj",
            "SecondaryAttribute": "Default Response Set",
            "TertiaryAttribute": null,
            "Payload": null
          }
        ]
      }
      var output = Object.assign({}, template)
      output.error = []

      output.SurveyEntry.SurveyName = input.SurveyName
      var item = {
        'SurveyID': ' ',
        'Element': 'SQ',
        'PrimaryAttribute': ' ',
        'SecondaryAttribute': ' ',
        'TertiaryAttribute': null,
        'Payload': {
          'QuestionText': '',
          'DefaultChoices': false,
          'DataExportTag': ' ',
          'Configuration': {
            'QuestionDescriptionOption': 'UseText'
          },
          'QuestionDescription': " ",
          'Validation': {
            'Settings': {
              'ForceResponse': 'ON',
              'ForceResponseType': 'ON',
              'Type': 'None'
            }
          },
          'GradingData': [],
          'Language': [],
          'QuestionID': 'QID2'
        }
      }

      
      var displayLogic = {
        'Type': 'BooleanExpression',
        'inPage': false,
        '0': {
          'Type': 'If'
        }
      }

      var logicItems = {
        'LogicType': 'Question',
        'QuestionID': '',
        'QuestionIsInLoop': 'no',
        'ChoiceLocator': '',
        'Operator': 'Selected',
        'QuestionIDFromLocator': '',
        'LeftOperand': '',
        'Type': 'Expression',
        'Description': ''
      }

      var choices = {}
      var answers = {}
      
      // Function to render questions
      function displayQuestionNum () {
        item.PrimaryAttribute = 'QID0'
        item.Payload.DataExportTag = 'Q0'
        item.Payload.QuestionType = 'DB'
        item.Payload.Selector = 'TB'
        item.Payload.QuestionID = 'QID0'
        item.Payload.QuestionDescription = '<div style="text-align: center;">&nbsp;</div><div style="text-align: center;">&nbsp;</div><div style="text-align: center;"><img src="https://monash.az1.qualtrics.com/CP/Graphic.php?IM=IM_bryzAUHqcTC8j09" style="width: 64px; height: 64px;" /><br /><br/><strong>What are your preferences for health &amp; beauty products?</strong><br /><br />Take 3 minutes to complete this survey.</div>'
        item.Payload.QuestionText = '<div style="text-align: center;">&nbsp;</div><div style="text-align: center;">&nbsp;</div><div style="text-align: center;"><img src="https://monash.az1.qualtrics.com/CP/Graphic.php?IM=IM_bryzAUHqcTC8j09" style="width: 64px; height: 64px;" /><br /><br/><strong>What are your preferences for health &amp; beauty products?</strong><br /><br />Take 3 minutes to complete this survey.</div>'
        output.SurveyElements.push(item)
        for (let obj in input.SurveyElements) { 
          var qType = input.SurveyElements[obj].QuestionType
          var inputID = (input.SurveyElements[obj].id).substr(0,3)  
          const localItem = Object.assign({}, item)
          const Payload = Object.assign({}, item.Payload)

          if (inputID === 'QID') {
            localItem.PrimaryAttribute = input.SurveyElements[obj].id
            Payload.QuestionID = input.SurveyElements[obj].id
            Payload.DataExportTag = 'Q' + (input.SurveyElements[obj].id).substr(3)
            localItem.SecondaryAttribute = input.SurveyElements[obj].QuestionText
            Payload.Selector = input.SurveyElements[obj].Selector
            Payload.QuestionText = localItem.SecondaryAttribute
            Payload.QuestionDescription = localItem.SecondaryAttribute
            Payload.QuestionType = qType
            localItem.Payload = Payload
            output.SurveyElements.push(localItem)
          }
        }
      }

      displayQuestionNum()
      //Display number of choices for MCQ
      function displayChoiceNum () {
        for (let obj in input.SurveyElements) {
          var qid = input.SurveyElements[obj].id
          var qindex = output.SurveyElements.getIndexBy('PrimaryAttribute', qid) 
          var qType = input.SurveyElements[obj].QuestionType
          if (qType === 'MC' || qType === 'Matrix') {
            var choiceLength = input.SurveyElements[obj].Choices.length
            output.SurveyElements[qindex].Payload['Choices'] = [choices]
            output.SurveyElements[qindex].Payload['VariableNaming'] = input.SurveyElements[obj].VariableNaming
            output.SurveyElements[qindex].Payload['ChoiceOrder'] = []
            output.SurveyElements[qindex].Payload.Choices = {}
            for (var i = 0; i < choiceLength; i++) {
              if (output.SurveyElements[qindex].Payload.Choices[i + 1] === undefined) {
                output.SurveyElements[qindex].Payload.Choices[i + 1] = {}
              }
              output.SurveyElements[qindex].Payload.Choices[i + 1]["Display"] = input.SurveyElements[obj].Choices[i].Display
              output.SurveyElements[qindex].Payload['ChoiceOrder'].push(i + 1)
            }

          }if (qType === 'MC') {
            output.SurveyElements[qindex].Payload['SubSelector'] = 'TX'
          }if (qType === 'Matrix') {
            var answerLength = Object.keys(input.SurveyElements[obj].Answers).length
            // console.log(Object.keys(input.SurveyElements[obj].Answers))
            output.SurveyElements[qindex].Payload['Answers'] = [answers]
            output.SurveyElements[qindex].Payload['AnswerOrder'] = []
            output.SurveyElements[qindex].Payload.Answers = {}
              for (var i = 0; i < answerLength; i++) {
              if (output.SurveyElements[qindex].Payload.Answers[i + 1] === undefined) {
                output.SurveyElements[qindex].Payload.Answers[i + 1] = {}
              }
              output.SurveyElements[qindex].Payload.Answers[i + 1]["Display"] = input.SurveyElements[obj].Answers[i].Display
              output.SurveyElements[qindex].Payload['AnswerOrder'].push(i + 1)
              }  
          }
        }
      }

      displayChoiceNum()
      // Function to render the number of display logic
      function displayLogicNum () {
        for (let obj in input.SurveyElements) {
          const localDisplay = {
            'Type': 'BooleanExpression',
            'inPage': false,
            '0': {
              'Type': 'If'
            }
          }
          // check whether each question has display logic requirement, then render on output accordingly
          if (input.SurveyElements[obj].hasOwnProperty('DisplayLogic')) {
            var outputIndex = output.SurveyElements.getIndexBy('PrimaryAttribute', input.SurveyElements[obj].id)
            var num = Object.keys(input.SurveyElements[obj].DisplayLogic.from).length
            for (var i = 0; i < num; i++) {
              const localItem = Object.assign({}, logicItems)
              localItem.QuestionID = (Object.keys(input.SurveyElements[obj].DisplayLogic.from)[i]).substr(0, extractString((Object.keys(input.SurveyElements[obj].DisplayLogic.from)[i])))
              var Qindex = input.SurveyElements.getIndexBy('id', localItem.QuestionID)
              
              var insertedQuestion = input.SurveyElements[Qindex].QuestionText // Return display logic question
              
              var checkAnswer = Object.keys(input.SurveyElements[obj].DisplayLogic.from)[i]
              var indexForConditionalAnswer = input.SurveyElements[Qindex].Choices.getIndexBy('id', checkAnswer.substring(0,slash(checkAnswer)))
              
              try{
                var conditionalAnswer = input.SurveyElements[Qindex].Choices[indexForConditionalAnswer].Display // Return display logic answer
              } catch(e){
                output.error.push(checkAnswer + ': Non existing answer in its question.')
              }
              
              localItem.QuestionIDFromLocator = localItem.QuestionID
              var choiceLocator = (Object.keys(input.SurveyElements[obj].DisplayLogic.from)[i]).substr(extractString((Object.keys(input.SurveyElements[obj].DisplayLogic.from)[i]))+1)
              localItem.ChoiceLocator = 'q://' + localItem.QuestionID + '/SelectableChoice/' + choiceLocator
              localItem.LeftOperand = localItem.ChoiceLocator
      
              if (input.SurveyElements[obj].DisplayLogic.from[checkAnswer]) {
                  localItem.Operator = 'Selected'
                } else {
                  localItem.Operator = 'NotSelected'
              }
              if (i > 0) {
                localItem["Conjuction"] = "Or"
                localItem.Description = "<span class=\"ConjDesc\">" + localItem.Conjuction + "</span> <span class=\"QuestionDesc\">" + insertedQuestion + "</span> <span class=\"LeftOpDesc\">" + conditionalAnswer + "</span> <span class=\"OpDesc\">"+localItem.Operator+"</span>"
              }else{
                localItem.Description = "<span class=\"ConjDesc\">" + displayLogic[0].Type + "</span> <span class=\"QuestionDesc\">" + insertedQuestion + "</span> <span class=\"LeftOpDesc\">" + conditionalAnswer + "</span> <span class=\"OpDesc\">"+localItem.Operator+"</span>"
              }
              localDisplay[0][i] = localItem
            }
            output.SurveyElements[outputIndex].Payload['DisplayLogic'] = localDisplay
            // console.log(output.SurveyElements[outputIndex].Payload['DisplayLogic'])
          }
        }
      }

      displayLogicNum()
      // Render the number of blocks
      // Render the number of questions 

      var numOfQuestions = input.SurveyElements.length - 1

      // Increase count of Question Count
      var qcIndex = output.SurveyElements.getIndexBy('Element', 'QC')
      output.SurveyElements[qcIndex].SecondaryAttribute = numOfQuestions.toString()

      // Render Termination Logic
      var terminationLogic = {
        'SurveyID': ' ',
        'Element': 'FL',
        'PrimaryAttribute': 'Survey Flow',
        'SecondaryAttribute': null,
        'TertiaryAttribute': null,
        'Payload': {
          'Type': 'Root',
          'FlowID': 'FL_1',
          'Flow': [
            {
              'Type': 'Block',
              'ID': 'BL_9Y1WHjiXZU4mJzn',
              'FlowID': 'FL_2'
            },
            {
              'Type': 'Branch',
              'FlowID': 'FL_3',
              'Description': 'New Branch',
              'BranchLogic': {
                '0': {
                  'Type': 'If'
                },
                'Type': 'BooleanExpression'
              },
              'Flow': [
                {
                  'Type': 'EndSurvey',
                  'FlowID': 'FL_4'
                }
              ]
            }
          ],
          'Properties': {
            'Count': 4
          }
        }
      }

      var termBlock = {
        'SurveyID': ' ',
        'Element': 'FL',
        'PrimaryAttribute': 'Survey Flow',
        'SecondaryAttribute': null,
        'TertiaryAttribute': null,
        'Payload': {
          'Type': 'Root',
          'FlowID': 'FL_1',
          'Flow': [
              {
                "Type": "EmbeddedData",
                "FlowID": "FL_ED",
                "EmbeddedData": [
                  {
                    "Description": "r",
                    "Type": "Recipient",
                    "Field": "r",
                    "VariableType": "Nominal"
                  },
                  {
                    "Description": "m",
                    "Type": "Recipient",
                    "Field": "m",
                    "VariableType": "Nominal"
                  },
                  {
                    "Description": "cid",
                    "Type": "Recipient",
                    "Field": "cid",
                    "VariableType": "Nominal"
                  }
                ]
              },
              {
                "Type": "EmbeddedData",
                "FlowID": "FL_ED",
                "EmbeddedData": [
                  {
                    "Description": "State",
                    "Type": "Recipient",
                    "Field": "State",
                    "VariableType": "Nominal"
                  },
                  {
                    "Description": "Gender",
                    "Type": "Recipient",
                    "Field": "Gender",
                    "VariableType": "Nominal"
                  },
                  {
                    "Description": "SawSurvey",
                    "Type": "Custom",
                    "Field": "SawSurvey",
                    "VariableType": "Nominal",
                    "Value": "1"
                  }
                ]
              },
            {
              "Type": "Block",
              "ID": "BL_0",
              "FlowID": "FL_0"
            },
          ],
          'Properties': {
            'Count': ' '
          }
        }
      }
      var termItems = {
        'LogicType': 'Question',
        'QuestionID': ' ',
        'QuestionIsInLoop': 'no',
        'ChoiceLocator': ' ',
        'Operator': ' ',
        'QuestionIDFromLocator': ' ',
        'LeftOperand': ' ',
        'Type': 'Expression',
        'Description': ''
      }

      var blockFlow = {
        "Type": "Block",
        "ID": " ",
        "FlowID": "FL_" 
      }

      var termFlow = 	{
        "Type": "Branch",
        "FlowID": "FL_",
        "Description": "New Branch",
        "BranchLogic": {
          "0": {
            "Type": "If"
          },
          "Type": "BooleanExpression"
        },
        "Flow": [
          {
            "Type": "EndSurvey",
            "FlowID": "FL_",
            "EndingType": "Advanced",		
            "Options": {		
              "Advanced": "true",		
              "SurveyTermination": "DisplayMessage",		
              "EOSMessageLibrary": "UR_9Ex5XEZcTV1wfaZ",		
              "EOSMessage": "MS_eA5IREpQbFaXAj3" 
            }  
          }
        ]
      }       

      var qBlock = {
        "Type": "Standard",
        "SubType": "",
        "Description": "Block 1",
        "ID": "BL_1",
        "BlockElements":[]
      }

      //STARTING TO GENERATE TERMINATION_LOGIC
      var checkTermination = input.SurveyElements.getIndexBy('id', 'TERMINATE')
      var checkSurveyBlock = output.SurveyElements.getIndexBy('PrimaryAttribute', 'Survey Blocks')
      var termFromQ = input.SurveyElements[checkTermination].logic.from
      var termArray = []
      var fullArray = []
      for (let i of Object.keys(termFromQ)) {
        termArray.push(i.slice(3,extractString(i)))    
        fullArray.push(i)
      }
      //  function to generate unique value in an array
      function uniq (a) {
        return Array.from(new Set(a))
      }

    
      var numQ = input.SurveyElements.length - 1
        
      var uniqT = uniq(termArray)

      //generate termination  conditions for survey flow
      function generateSurveyFlow (){
        var counts = {}
        termArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })
        var count = 2
        var flowID = 1
        let tempArray = []
        output.SurveyElements.push(termBlock)
        if (uniqT.length === 0){
          blockFlow.FlowID = " FL_" + String(count++)
          blockFlow.ID = "BL_" + String(flowID++)
          termBlock.Payload.Flow.push(blockFlow)
        }else {
          for (var m = 1; m <= numQ; m++) {
            const localTermFlow = Object.assign({}, termFlow)
            const localBlockFlow = Object.assign({}, blockFlow)
            const localFlow = Object.assign([], termFlow.Flow)
            const localFlowID = Object.assign({}, termFlow.Flow[0])
            const localBranch = Object.assign({}, termFlow.BranchLogic)
            const localX = Object.assign({}, termFlow.BranchLogic['0'])
            const nonTermLocalBlockFlow = Object.assign({}, blockFlow)
              if (uniqT.indexOf(String(m)) === -1){  
                tempArray.push('countTemp')
              } else {
                if(tempArray.length > 0){
                  nonTermLocalBlockFlow.FlowID = " FL_" + String(count++)
                  nonTermLocalBlockFlow.ID = "BL_" + String(flowID++)
                  termBlock.Payload.Flow.push(nonTermLocalBlockFlow)
                }
                tempArray = []
                localBlockFlow.FlowID = " FL_" + String(count++)
                localBlockFlow.ID = "BL_" + String(flowID++)
                localTermFlow.FlowID = "FL_" + String(count++)
                localFlowID.FlowID = "FL_" + String(count++)
                termBlock.Payload.Flow.push(localBlockFlow)
                termBlock.Payload.Flow.push(localTermFlow)
                localTermFlow.Flow = localFlow
                localTermFlow.Flow[0] = localFlowID
                for (var i = 1; i <= counts[String(m)]; i++){
                  const localItem = Object.assign({}, termItems)
                  localX[i-1] = localItem
                  localItem.QuestionID = 'QID' + String(m)
                  var ansArr = []
                  var fullAns = []
                  for (let ans of fullArray) {
                    var start = ans.slice(3,extractString(ans))
                    if (start === String(m)) {
                      ansArr.push(ans.slice(extractString(ans)+1))
                      fullAns.push(ans)
                    }
                  }
                  localItem.QuestionIDFromLocator = localItem.QuestionID
                  var choiceLocator = ansArr[i-1]
                  localItem.ChoiceLocator = 'q://' + localItem.QuestionID + '/SelectableChoice/' + choiceLocator
                  localItem.LeftOperand = localItem.ChoiceLocator
                  var Tindex = input.SurveyElements.getIndexBy('id', localItem.QuestionID)
                  var conditionalType = terminationLogic.Payload.Flow[1].BranchLogic[0].Type
                  var termQuestion = input.SurveyElements[Tindex].QuestionText
                  var checkAnswer = fullAns[i-1]
                  var indexForTermAnswer = input.SurveyElements[Tindex].Choices.getIndexBy('id', checkAnswer.substring(0,slash(checkAnswer)))
                  // var termAnswer = input.SurveyElements[Tindex].Choices[indexForTermAnswer].Display
                  try{
                    var termAnswer = input.SurveyElements[Tindex].Choices[indexForTermAnswer].Display // Return display logic answer
                  } catch(e){
                    console.log(checkAnswer + ': Such Display Logic does not exist.')
                  }
                  //Beginning tracing back the value of true/false of termination logic in input
                  var trace = localItem.QuestionID + '_' + choiceLocator //get the form of "QID#_#"
                  if (termFromQ[trace]) {
                    localItem.Operator = 'Selected'
                  } else {
                    localItem.Operator = 'NotSelected'
                  }

                  if (i > 1) {
                    localItem['Conjuction'] = 'Or'
                    localItem.Description = "<span class=\"ConjDesc\">" + localItem.Conjuction + "</span> <span class=\"QuestionDesc\">" + termQuestion + "</span> <span class=\"LeftOpDesc\">" + termAnswer + "</span> <span class=\"OpDesc\">Is " + localItem.Operator + "</span> "
                  } else {
                    localItem.Description = "<span class=\"ConjDesc\">" + conditionalType + "</span> <span class=\"QuestionDesc\">" + termQuestion + "</span> <span class=\"LeftOpDesc\">" + termAnswer + "</span> <span class=\"OpDesc\">Is " + localItem.Operator + "</span> "
                  }
                }
              }
            
              if (m === numQ && (uniqT.indexOf(String(m)) === -1)){
                // if reaches last question where there is no TE
                nonTermLocalBlockFlow.FlowID = " FL_" + String(count++)
                nonTermLocalBlockFlow.ID = "BL_" + String(flowID++)
                termBlock.Payload.Flow.push(nonTermLocalBlockFlow)
              
              }
            localBranch['0'] = localX
            localTermFlow.BranchLogic = localBranch
          }
        }  
        var FLIndex = output.SurveyElements.getIndexBy('Element','FL')

        output.SurveyElements[FLIndex].Payload.Properties.Count = count-1

      }

      //  function to generate survey blocks
      function displayTerminationLogic () {
        let firstqBlock = Object.assign({}, qBlock)
        firstqBlock['Description'] = 'Intro'
        firstqBlock['ID'] = 'BL_0'
        firstqBlock.BlockElements = [{Type: 'Question', QuestionID: 'QID0'}]
        output.SurveyElements[checkSurveyBlock].Payload.push(Object.assign({}, firstqBlock))  

        var countBlock = 0
          let tempArray = []
          for (var j = 1; j <= numQ; j++) {
            // console.log(`Iteration ${j}`)
            if (uniqT.indexOf(String(j)) === -1) {
              tempArray.push({Type: 'Question', QuestionID: 'QID' + String(j)})
              tempArray.push({Type:'Page Break'})
            } else {
              if (tempArray.length > 0) {
                // countBlock++
                let pastqBlock = Object.assign({}, qBlock)
                pastqBlock.BlockElements = tempArray
                if (countBlock++) {
                  pastqBlock['Description'] = 'Block ' + countBlock
                  pastqBlock['ID'] = 'BL_' + countBlock
                }
                output.SurveyElements[checkSurveyBlock].Payload.push(Object.assign({}, pastqBlock))     
              }
              tempArray = []
              let currentqBlock = Object.assign({}, qBlock)
              currentqBlock.BlockElements = [{Type: 'Question', QuestionID: 'QID' + String(j)}]
              if (countBlock++) {
                currentqBlock['Description'] = 'Block ' + countBlock
                currentqBlock['ID'] = 'BL_' + countBlock
              }
              output.SurveyElements[checkSurveyBlock].Payload.push(currentqBlock)
            }
            if (j === numQ && uniqT.indexOf(String(j)) === -1) {
              let pastqBlock = Object.assign({}, qBlock)
              pastqBlock.BlockElements = tempArray
              if (countBlock++) {
                pastqBlock['Description'] = 'Block' + countBlock
                pastqBlock['ID'] = 'BL_' + countBlock
              }
              output.SurveyElements[checkSurveyBlock].Payload.push(pastqBlock)
            }
          }
      }

      generateSurveyFlow()
      displayTerminationLogic()
     
      res.write(JSON.stringify(output))
      res.end();
    });
 
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}
  