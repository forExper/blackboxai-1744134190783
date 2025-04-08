import { Text, View, StyleSheet, TouchableOpacity, Switch, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function MenuScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <FontAwesome name="user" size={40} color="#FFFFFF" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>User Name</Text>
          <Text style={styles.profileEmail}>user@example.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <FontAwesome name="pencil" size={16} color="#007AFF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingIconContainer}>
            <FontAwesome name="moon-o" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#D1D1D6", true: "#007AFF" }}
            thumbColor="#FFFFFF"
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={[styles.settingIconContainer, { backgroundColor: "#FF9500" }]}>
            <FontAwesome name="bell" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#D1D1D6", true: "#007AFF" }}
            thumbColor="#FFFFFF"
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={[styles.settingIconContainer, { backgroundColor: "#4CD964" }]}>
            <FontAwesome name="save" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.settingText}>Auto Save</Text>
          <Switch
            value={autoSave}
            onValueChange={setAutoSave}
            trackColor={{ false: "#D1D1D6", true: "#007AFF" }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.settingIconContainer, { backgroundColor: "#5856D6" }]}>
            <FontAwesome name="cloud" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.menuItemText}>Sync</Text>
          <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.settingIconContainer, { backgroundColor: "#FF2D55" }]}>
            <FontAwesome name="trash" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.menuItemText}>Clear Data</Text>
          <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <View style={[styles.settingIconContainer, { backgroundColor: "#8E8E93" }]}>
            <FontAwesome name="sign-out" size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.menuItemText}>Logout</Text>
          <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.versionText}>Notes App v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 16,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  settingIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  settingText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  menuItemText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
  },
  footer: {
    padding: 16,
    alignItems: "center",
  },
  versionText: {
    fontSize: 14,
    color: "#8E8E93",
  },
});
