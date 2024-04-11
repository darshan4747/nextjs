import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <p>
The Exercise<br>
From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.<br>
Ans: There are two kinds of problems in your life: the urgent and the important. The urgent are not important, and the important are never urgent. That being said, I would like to go through these tasks one by one and separate them by quadrant. Once I can see these tasks in the designated categories, I will be able to schedule them and accomplish my most important work. Once you know how to distinguish between designated categories (urgent and important tasks), you can begin separating your tasks into the four quadrants. 
Quadrant 1: Do Tasks in this quadrant are both urgent and important. They demand immediate attention as they have significant consequences and impact long-term goals. These are the tasks that are most pressing and likely causing you stress.

Quadrant 2: Schedule This quadrant is for tasks that are important but not urgent. They contribute to long-term goals but don't require immediate action, allowing you to schedule them for later. Prioritize these tasks after completing those in Quadrant 1, employing strategies like the Pareto principle or the Pomodoro technique for effective time management.

Quadrant 3: Delegate Quadrant three houses tasks that are urgent but not important to your long-term goals. Since these don't necessitate your personal attention or a specific skill set, delegate them to others. This approach not only lightens your workload but also aids in team development.

Quadrant 4: Delete After sorting tasks into the first three quadrants, what remains are neither urgent nor important. These tasks are distractions hindering your progress and should be eliminated, fitting into the "delete" quadrant.

These are the common support activities that one has to do at a certain point of time. I would like to rather organize the tasks by frequency also– Daily, Weekly, Biweekly, and Monthly:
Daily Tasks Respond to 50+ support requests via email: Addressing customer queries to ensure prompt support. Dig through logs to troubleshoot a customer's broken project: With a focus on automating repetitive patterns. Help resolve billing issues for customers: Ensuring smooth financial transactions for user satisfaction. Manage a support team: Leading and guiding the support team on a daily basis. Work with 3rd party partners to track down tricky situations: Collaborating to solve complex customer issues. Act as a dedicated CSE for key customers: Providing specialized support to ensure their success. Work with engineering teams during incidents: Coordinating to resolve technical issues promptly. Work with people to figure out if the product is suitable for their use case: Guiding potential users daily.
Weekly Tasks Write and maintain support articles and docs pages: Keeping documentation updated to help users self-serve. Create video tutorials for specific features or use cases: Enhancing learning resources for users. Identify, file (and, where possible, resolve) bugs: Keeping the product quality high by managing its issues. Find and recruit teammates for the support team: Strengthening the team with new talent. Help train and onboard new support teammates: Ensuring new members are well-prepared. Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites: Engaging with the user community. Scheduling time-off coverage: Planning to maintain team efficiency and support coverage.
Biweekly Tasks Run ticket review sessions to ensure tone consistency: Maintaining quality and uniformity in customer interactions. Work with the product team on new feature development based on feedback: Collaborating for product improvements.
Monthly Tasks Analyze hundreds of support tickets to spot trends: Identifying larger trends to inform product development. Engage multiple users in public discussions: Managing broader community engagement and support. 
2. What do you want to learn or do more of at work? Ans. Learning is indeed a never-ending process, and I wholeheartedly embrace it as a fundamental part of my professional journey. I live by the philosophy that 'People will forget what you said, people will forget what you did, but people will never forget how you made them feel.' This principle not only shapes my interactions with others but also influences my approach to customer service and team leadership. Guided by the philosophy that people will never forget how you made them feel, I place the customer at the center of everything I do. I firmly believe in aligning my actions with what’s best for our customers, convinced that their success directly translates to our success. This approach has shaped my decision-making process, often leading me to opt for solutions that provide long-term value over immediate, short-term gains. What I have done in my leadership journey is beyond my routined responsibility, I am always ++ to my role and I would continue doing the same here as well. Projects: Case deflection: Owned the challenge of external case deflection. Involved in creating necessary knowledge goals for the team, improving search engine tuning, and redesigned search panels. Resulted in 300% improvement in search deflection. AWS and Azure Cost notifiers: Built infrastructure cost control dashboard, weekly slack notifiers with thresholds. Build processes to shutdown VM’s and storage that don’t have any tags. Cost governance significantly saved costs over 100K/month. ML implementation of Case Routing: Spearhead the initiative to assign cases to spark and platform from traditional rule-based model to ML model. This improved case assignment accuracy from 60% rule based to 85% via ML model. These saved support leads time in reassigning cases and aided in faster resolution. Dashboard to understand rate limits: Customers often raised cases as they hit rate limits due to surge in their peak loads. Launched an initiative to develop a dashboard to detect if there are customer’s job APIs hitting a limit. This project improved time to resolve customer cases. PVC Billing: Streamlined monthly billing process for Private cloud customers, where Databricks is deployed with customer environments. This process helped in bringing back revenue to Databricks on the 10th of every month. Automation initiatives: Engineers often spend time in finding the log URL’s, Genie URLs to login to customer workspace. Lead an initiative to create a browser plugin to auto construct these URLs for every case to improve engineers’ productivity. Ask Support: Dedicated Support Assistant powered by AI who can assist customers in fixing issues , answering queries related to our product. 3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was Successful? Ans: In a previous role as a solution engineer manager in a support team, I faced a situation where a customer faced repeated issues with their Spark jobs in the Databricks environment, leading to multiple escalations. The issue revolved around performance degradation and inefficiencies in processing big data tasks. Given the complexity and technical depth of the problem, direct debugging wasn't the onlysolution; it required a thorough approach to ensure customer satisfaction and job optimization. Strategy and Implementation: Understanding the critical nature of the issue, I spearheaded a strategic approach focusing on Spark job optimization. We began by revisiting the basics of data partitioning, ensuring it was strategically aligned with the workload characteristics to enhance parallelism and reduce processing times. Recognizing the importance of caching and persistence, we advised on effectively caching frequently accessed DataFrames, which significantly reduced recomputation needs. To address data skewness—a common yet often overlooked issue—we utilized Databricks' tools for identifying and mitigating skewed data, such as adjusting the spark.sql.shuffle.partitions configuration. This was complemented by leveraging Databricks’ auto-optimization features and integrating Delta Lake for its advanced data management capabilities, further enhancing performance. We also emphasized the importance of cluster configuration, guiding the customer to select the appropriate cluster size and instance type based on their data size and job complexity. This advice extended to storage considerations, advocating for SSDs to improve shuffle operation performances. Ensuring Success: The determination of our solution's success was twofold. Firstly, technical metrics indicated a significant improvement in the Spark jobs' performance, with reduced processing times and more efficient resource utilization. Secondly, and most importantly, was the customer’s feedback. The client expressed high satisfaction with the impact on their operations, noting the marked improvement in their data processing tasks' efficiency and cost-effectiveness. This positive outcome was reinforced by continuous follow-up and the establishment of a feedback loop, ensuring that the optimizations remained effective over time and that the customer felt supported throughout the process. The experience underscored the importance of a holistic approach to problem-solving in technical support roles—not just addressing the immediate technical challenges but also ensuring the customer feels valued and heard, aligning with the philosophy that people will never forget how you made them feel. 4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? Ans: NA 5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better? Ans: When faced with a customer's build issue in an unfamiliar framework or technology, my initial approach to troubleshooting would involve a structured process to understand the issue in depth, gathering necessary information, and leveraging available resources for an effective solution. Here's how I would proceed: Initial Steps for Troubleshooting: I would First, acknowledge the customer's issue and reassure them that I am here to assist. It is important to make the customer feel supported and confident in your willingness to help solve their issue. Lets conduct a preliminary research on the specific framework or technology mentioned by the customer. This can involve reviewing official documentation, forums, or any internal knowledge bases for similar issues. Key Questions to Ask the Customer: To probe is an important aspect in customer facing role: Could you provide a detailed description of the build issue you are facing, including any error messages or logs? Can you specify the version of the framework or technology you're using, along with details about your development environment (e.g., operating system, IDE version)? What steps can we take to reproduce the issue on our end?
</p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
