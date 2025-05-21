import { FlatList, Text, View } from "react-native";

// creating a parameter type for component
type PrintArticlesProps = {
    size: number;
};

export default function PrintArticles({ size }: PrintArticlesProps) {

    return (
        <FlatList 
            data={require("@/assets/static_text/articles.json")}
            renderItem={
                ({item}) => {
                    return (
                        <View style={{flex:1, marginBottom: 15, marginHorizontal: 5}}>
                            <Text style={{fontSize: size}}>{item.title}</Text>
                            <Text style={{fontSize: size-6}}>{item.body}</Text>
                        </View>
                    );
                }
            }
        />
    );
};