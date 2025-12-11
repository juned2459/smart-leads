# Tech Stack
1. React (Vite) – Fast modern frontend tooling
2. Tailwind CSS – Utility-first styling
3. Axios – API communication



# Setup Instructions

1. Clone the repository
   a. git clone https://github.com/juned2459/smart-leads.git
   b. cd smart-leads

2. Install dependencies
   a. npm install   ```

3. Environment Configuration
   a. Create a file named: ./src/environment.js
   b. Add import properties in like below :
      export const API_BASE_URL = "https://smart-leads-apis-production.up.railway.app/api/leads";

4. Run the server in development mode using npm run dev
5. Your app will run at: http://localhost:5173 

6. Build for production by using npm run build


# Architectural Explanation

1. How Batch API Requests Are Sent
   a. The user enters comma-separated names in InputForm.
   b. When the Submit button is clicked in InputForm.jsx this triggers handleLeadSubmit() in App.jsx which result in api post request processNames and if we success response from processNames api call the we call loadData() in which getAllLeads api called to refresh the data so we get updated list of leads
      const handleLeadSubmit = async (names) => {
        const resp = await processNames(names);
        if (resp.success) {
            loadData();
        }
      };
      
2. In the LeadsTable we show list of leads data which we get from getAllLeads api. And all this api calls are  implemented with the help of axios. 


3. Component Structure
   src/
    ├─ components/
    │   ├─ InputForm.jsx
    │   └─ LeadsTable.jsx
    ├─ api.js
    ├─ axios.js
    ├─ environment.js
    ├─ App.jsx
    └─ main.jsx
   
4. Key Components
   a. InputForm.jsx
      Handles:
      * User text input
      * Validation
      * Submit callback

   b. LeadsTable.jsx
      Displays:      
      * Name
      * Country
      * Probability
      * Status (Verified / To Check)
      * Synced flag

    c. App.jsx    
       Manages:       
       * Lead list state
       * Filter state
       * Data loading
       * API calls via Axios

