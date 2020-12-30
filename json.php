<?php
include("js/randomize.js");

class Emp
{
    public $ConfirmEjects = '';
    public $EmergencyMeetings = '';
    public $EmergencyCooldown = '';
    public $DiscussionTime = '';
    public $VotingTime = '';
    public $PlayerSpeed = '';
    public $CrewmateVision = '';
    public $ImpostorVision = '';
    public $KillCooldown = '';
    public $KillDistance = '';
    public $VisualTasks = '';
    public $CommonTasks = '';
    public $LongTasks = '';
    public $ShortTasks = '';
}

$e = new Emp();
$e->name = 'sachin';
$e->hobbies = 'sports';
$e->birthdate = date('m/d/Y h:i:s a', '8/5/1974 12:20:03 p');
$e->birthdate = date('m/d/Y h:i:s a', strtotime('8/5/1974 12:20:03'));

$e->ConfirmEjects = cho
$e->EmergencyMeetings = '';
$e->EmergencyCooldown = '';
$e->DiscussionTime = '';
$e->VotingTime = '';
$e->PlayerSpeed = '';
$e->CrewmateVision = '';
$e->ImpostorVision = '';
$e->KillCooldown = '';
$e->KillDistance = '';
$e->VisualTasks = '';
$e->CommonTasks = '';
$e->LongTasks = '';
$e->ShortTasks = '';

echo json_encode($e);
?>
