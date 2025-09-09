
"use client"
import { useState } from 'react';
import Layout from '../components/Layout'
import TabCenterMenu from '../components/contractcenter/TabCenterMenu';
import { TabOption } from '../components/contractcenter/TabCenterMenu';
import FilterBar from '../components/contractcenter/FilterBar';
import CenterDataTable from '../components/contractcenter/CenterDataTable';
import { mockContractsCenter } from '../data/mock-contract-center'


export default function ContractCenterUpdateStatusPage() {

  const [currentTab, setCurrentTab] = useState<TabOption>('All');
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredContracts = mockContractsCenter.filter((contract) => {
    const matchKeyword = contract.no.includes(searchKeyword) || contract.detail.includes(searchKeyword);
    const matchTab = currentTab === 'All' || contract.activity === currentTab;
    return matchKeyword && matchTab;
  });

  return (
    <>
      <Layout>
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-auto"> {/* max-w-4xl */}
              <div className="w-full">
                <TabCenterMenu currentTab={currentTab} onChange={setCurrentTab} />
                <div className='pt-4 pb-4'><FilterBar onSearch={setSearchKeyword} /></div>
                  <CenterDataTable data={filteredContracts} />
                </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
