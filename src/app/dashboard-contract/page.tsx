"use client"
// import { useState } from 'react';
import Layout from '../components/Layout'
// import TabRenewalMenu from '../components/contractcenter/TabRenewalMenu';
// import { TabOption } from '../components/contractcenter/TabRenewalMenu';
// import FilterBar from '../components/contractcenter/FilterBar';
// import DataTable from '../components/contractcenter/DataTable';
// import { contracts } from '../data/mock-contract'

 
export default function DashboardContractPage() {

  // const [currentTab, setCurrentTab] = useState<TabOption>('All');
  // const [searchKeyword, setSearchKeyword] = useState('');

  // const filteredContracts = contracts.filter((contract) => {
  //   const matchKeyword = contract.no.includes(searchKeyword) || contract.detail.includes(searchKeyword);
  //   const matchTab = currentTab === 'All' || contract.activity === currentTab;
  //   return matchKeyword && matchTab;
  // });

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-auto"> {/* max-w-4xl */}
              <div className="w-full">
                  Contract Reports
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
