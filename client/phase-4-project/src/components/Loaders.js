//  Loaders component (fetch request) //
export async function GetSampleUsers () {
 const sampleResponse = await sampleFetch   
 const sampleUsers = await sampleResponse.json()
 return { sampleUsers }
}