Set oShell = CreateObject("WScript.Shell")
Command = "cmd /K cd /d & cd/ & cd MongoDB\bin & mongod"
oShell.Run Command,2,True 

