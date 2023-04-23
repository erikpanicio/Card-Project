<?php
    $name = $_POST['name'];
    $number = $_POST['number'];
    $month = $_POST['month'];
    $year = $_POST['year'];
    $cvc = $_POST['cvc'];

    echo "Nome:$name <br>
          Número do Cartão: $number <br>
          Mês de vencimento: $month <br>
          Ano de vencimento: $year <br>
          CVC: $cvc";
?>