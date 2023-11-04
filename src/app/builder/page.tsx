import PageRenderer from "@/components/PageRender";

export default async function Page() {
  const { data, error } = await getPageData();

  const sections = data.uiConfig.sections;

  return (
    <main>
      <PageRenderer sections={sections} />
    </main>
  )
}

async function getPageData() {
  const response = await fetch('http://localhost:3000/api/websites');
  const { data, error } = await response.json();
  return { data, error };
}