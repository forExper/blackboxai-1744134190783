import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTags } from '../../context/TagContext';

export default function HashTagsScreen() {
  const { tags, addTag, deleteTag } = useTags();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tags</Text>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Pinned Tags</Text>
          <View style={styles.tagCloud}>
            {tags.sort((a, b) => b.count - a.count).slice(0, 5).map((tag, index) => (
              <TouchableOpacity key={index} style={[styles.tagBadge, { backgroundColor: tag.color }]}>
                <FontAwesome name="hashtag" size={14} color="#FFFFFF" />
                <Text style={styles.tagText}>{tag.name}</Text>
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{tag.count}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.allTagsSection}>
          <Text style={styles.sectionTitle}>All Tags</Text>
          <View style={styles.tagList}>
            {tags.map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tagItem}>
                <View style={[styles.tagDot, { backgroundColor: tag.color }]} />
                <Text style={styles.tagItemText}>#{tag.name}</Text>
                <Text style={styles.tagItemCount}>{tag.count} notes</Text>
                <TouchableOpacity onPress={() => deleteTag(tag.id)}>
                  <FontAwesome name="times" size={16} color="#FF3B30" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  popularSection: {
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
  tagCloud: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  tagBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 4,
  },
  tagText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 4,
  },
  countBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 6,
  },
  countText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  allTagsSection: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginTop: 16,
  },
  tagList: {
    marginTop: 8,
  },
  tagItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  tagDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  tagItemText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
  },
  tagItemCount: {
    fontSize: 14,
    color: "#999999",
  },
});
