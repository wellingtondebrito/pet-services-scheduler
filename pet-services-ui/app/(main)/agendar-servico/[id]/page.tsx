import ScheduleForm from "@/app/_components/custom/ScheduleForm";


export default async function BookingServicePage (){




    return(
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 container mx-auto px-4 py-8">
        <ScheduleForm />
        </main>
      </div>
        
    )
}