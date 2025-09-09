
"use client"
import { useState } from 'react';
import Layout from '../components/Layout'
import TabMenu from '../components/contractcenter/TabMenu';
import { TabOption } from '../components/contractcenter/TabMenu';
import FilterBar from '../components/contractcenter/FilterBar';
import DataTable from '../components/contractcenter/DataTable';
import { contracts } from '../data/mock-contract'

export default function ContractCenterUpdateStatusPage() {

  const [currentTab, setCurrentTab] = useState<TabOption>('All');
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredContracts = contracts.filter((contract) => {
    const matchKeyword = contract.no.includes(searchKeyword) || contract.detail.includes(searchKeyword);
    const matchTab = currentTab === 'All' || contract.activity === currentTab;
    return matchKeyword && matchTab;
  });

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-auto"> {/* max-w-4xl */}
            {/* <h1 className="text-2xl font-bold mb-4">Contract Dashboard</h1> */}
            <div className="w-full">
              <TabMenu currentTab={currentTab} onChange={setCurrentTab} />
              <div className='pt-4 pb-4'><FilterBar onSearch={setSearchKeyword} /></div>
                <DataTable data={filteredContracts} />
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
