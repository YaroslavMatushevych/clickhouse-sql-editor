import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ClickUIProvider, Spacer, ThemeName } from "@clickhouse/click-ui";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
    const [theme, setTheme] = useState<ThemeName>(
        (localStorage.getItem("theme") as ThemeName) || "dark"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ClickUIProvider theme={theme} key={theme}>
            <QueryClientProvider client={queryClient}>
                <div className="app-container">
                    <Header theme={theme} setTheme={setTheme} />

                    <Spacer size="xl" />

                    <main className="main-content">
                        <Home />
                    </main>

                    <Spacer size="xl" />

                    <Footer />
                </div>
            </QueryClientProvider>
        </ClickUIProvider>
    );
};

export default App;
