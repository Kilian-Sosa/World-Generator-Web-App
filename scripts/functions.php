<?php 
    $connection = connectToDB();
    $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    function connectToDB(){
        $HOST = "localhost";
        $DATABASE = "worldGenerator";
        $USER = "root";
        $PASSWORD = "";
        $DSN = "mysql:host=$HOST;dbname=$DATABASE";
        try{
            return new PDO($DSN, $USER, $PASSWORD);
        }catch(Exception $e){?>
            <div class="alert alert-danger" role="alert"><?php echo "Error conectando a la base de datos -> " . $e -> getMessage();?></div>
            <?php die();
        }
    }
    function showMaps(){
        try{
            global $connection;
            $records = $connection -> query('SELECT * from maps');
            while($object = $records -> fetch(PDO::FETCH_OBJ)){
                echo "<tr onclick='" . showMap($object -> id) . "'>
                        <td>
                            ID
                        </td>
                        <td>" . $object -> id . "</td>
                        </td>
                    </tr>";
            }    
        }catch(Exception $e){return false;}
    }

    function showMap($id){
        try{
            global $connection;
            $sentence = $connection -> prepare("SELECT * FROM maps WHERE id = ?;");
            $sentence -> execute([$id]);
            $object = $sentence -> fetch(PDO::FETCH_OBJ);
            return $object -> map;
        }catch(Exception $e){return false;}
    }

    function saveMap(){
        try{
            global $connection;

            $map = json_decode($_POST["map"], true);
            $mapString = "";

            for($i = 0; $i < sizeof($map); $i++){
                for($j = 0; $j < sizeof($map[$i]); $j++){
                    $mapString .= $map[$i][$j];
                }
                $mapString .= "|";
            }

            $sentence = $connection -> prepare("INSERT INTO maps(map) VALUES (?);");
            return $sentence -> execute([$mapString]);
        } catch(PDOException $e) {}
    }
    
?>