import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SinglePage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Get the navigation object

  const fetchStudentsData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.105:5000/api/v1/getStudents"
      );

      setStudents(response.data.students);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchStudentsData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : students.length > 0 ? (
        students.map((student) => (
          <View key={student._id} style={styles.studentContainer}>
            <Text style={styles.studentText}>Name: {student.name}</Text>
            <Text style={styles.studentText}>Email: {student.email}</Text>
            <Text style={styles.studentText}>Mobile: {student.mobile}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("RegistrationPage")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {/* Add more fields as needed */}
          </View>
        ))
      ) : (
        <Text style={styles.noStudentsText}>No students found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Make the container take the full screen height
    justifyContent: "center",
    alignItems: "center",
  },
  studentContainer: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "90%",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  studentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noStudentsText: {
    fontSize: 18,
    color: "gray",
  },
});

export default SinglePage;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
// } from "react-native";
// import axios from "axios";
// import { useNavigation } from "@react-navigation/native";
// const SinglePage = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation(); // Get the navigation object

//   const fetchStudentsData = async () => {
//     try {
//       const response = await axios.get(
//         "http://192.168.0.105:5000/api/v1/getStudents"
//       );

//       setStudents(response.data.students);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(true);
//     }
//   };

//   useEffect(() => {
//     fetchStudentsData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#007BFF" />
//       ) : students.length > 0 ? (
//         students.map((student) => (
//           <View key={student._id} style={styles.studentContainer}>
//             <Text style={styles.studentText}>Name: {student.name}</Text>
//             <Text style={styles.studentText}>Email: {student.email}</Text>
//             <Text style={styles.studentText}>Mobile: {student.mobile}</Text>

//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate("RegistrationPage")}
//             >
//               <Text>Register</Text>
//             </TouchableOpacity>

//             {/*
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate("RegistrationPage")}
//             >
//               <Text>Register</Text>
//             </TouchableOpacity> */}
//             {/* Add more fields as needed */}
//           </View>
//         ))
//       ) : (
//         <Text style={styles.noStudentsText}>No students found</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   studentContainer: {
//     backgroundColor: "#F0F0F0",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     width: "90%",
//   },
//   button: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   studentText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   noStudentsText: {
//     fontSize: 18,
//     color: "gray",
//   },
// });

// export default SinglePage;
