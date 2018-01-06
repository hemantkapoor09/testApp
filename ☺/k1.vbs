Set oShell = CreateObject("WScript.Shell")
Command = "cmd /K cd /d E: & cd Test & nodemon"
oShell.Run Command,2,True 

