<?php

$a2 = ["",""];

if (isset($a2)) {
    $a2 = implode(", ",$a2);
} else if (isset($a2[0])){
    $a2 = [0].".";
} else {
    $a2 = "";
}

echo $a2;
?>