import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TextInputsScreen = () => {
  const isIos = Platform.OS === "ios";
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <KeyboardAvoidingView behavior={isIos ? "height" : "padding"} style={{ flex: 1 }}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoComplete="name"
              keyboardType={"default"}
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={(text) => setform({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              keyboardType={"phone-pad"}
              onChangeText={(text) => setform({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoComplete="name"
              keyboardType={"default"}
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={(text) => setform({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              keyboardType={"phone-pad"}
              onChangeText={(text) => setform({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoComplete="name"
              keyboardType={"default"}
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={(text) => setform({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              keyboardType={"phone-pad"}
              onChangeText={(text) => setform({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoComplete="name"
              keyboardType={"default"}
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={(text) => setform({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              keyboardType={"phone-pad"}
              onChangeText={(text) => setform({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize={"words"}
              autoComplete="name"
              keyboardType={"default"}
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={(text) => setform({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              keyboardType={"phone-pad"}
              onChangeText={(text) => setform({ ...form, phone: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
