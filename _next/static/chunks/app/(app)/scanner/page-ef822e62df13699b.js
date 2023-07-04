(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{3891:function(e,n,t){Promise.resolve().then(t.bind(t,8968))},8968:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var o=t(9268),a=t(9332),c=t(6006),i=t(7490),u=t(3022);function r(){let[e,n]=(0,c.useState)(!1),[t,r]=(0,i._)("unlocked",[]);return(0,c.useEffect)(()=>n(!0),[]),e?(0,o.jsx)(a.h,{onDecode:e=>(function(e){console.log(e);let n=null==e?void 0:e.match(/\?id=(.+)&/);if(n){let e=n[1],o=u.find(n=>n.uuid===e);if(!o)return alert("找不到節點！");t.includes(e)||(r([...t,e]),alert("「".concat(null==o?void 0:o.name,"」解鎖成功！")))}})(e),onError:e=>console.log(null==e?void 0:e.message)}):(0,o.jsx)("p",{children:"loading..."})}},3022:function(e){"use strict";e.exports=JSON.parse('[{"icon":"sort","name":"排序演算法","category":"演算法","content":"排序 (Sorting) 是電腦科學中最常見的演算法問題，要將有限序列由小到大(大到小)排列。下面是幾個常見的排序演算法 1. 泡沫排序法 2. 插入排序法 3. 選擇排序法 4. 快速排序法 5. 合併排序法 6. 推積排序法","uuid":"0102d8c8"},{"icon":"timer-sand-complete","name":"複雜度","category":"演算法","content":"在演算法中，複雜度是來討論，各演算法的「執行效率」和該問題的「難度」。 我們常用「大 O 記號」來表示「演算法」時間和空間的複雜度，表示隨著輸入 n 增加，該演算法與所需步驟數的成長率。而「大 Ω 記號」則用來表示「問題」的複雜度，表示隨著輸入 n 增加，該問題所需的最少步驟數的增長率。例如: 合併排序法的時間複雜度為 O(nlogn) ，而排序問題經證明，複雜度為 Ω(nlogn) ，表示合併排序演算法已經具有最好的時間複雜度。","uuid":"ffbe0eb7"},{"icon":"linux","name":"Linux","category":"作業系統","content":"是一個開源的作業系統核心，由 Linus Torvalds 在 1991 年創建。因為 Linux 系統的穩定性和安全性，使得其成為各領域的首選系統。根據不同的用途和受眾有不同的發行版本，例如 Ubuntu 為一般的使用者、Debian 常用在伺服器系統、 CentOS 和 Kali Linux 則常用於資安領域。","uuid":"722e97fd"},{"icon":"ubuntu","name":"Ubuntu","category":"作業系統","content":"Ubuntu 是一個基於 Linux 核心的開源作業系統，具有良好的穩定性和安全性。Ubuntu 一詞的意思是「人性」，因此它強調用戶友好性和簡單性，並由廣大開源社群支持。Ubuntu 適用於個人和企業用戶，並廣泛用於桌面、伺服器和雲端環境。","uuid":"6b50dfe7"},{"icon":"box-shadow","name":"虛擬機 VM","category":"作業系統","content":"虛擬機 (Virtual Machine, VM)，是在硬體上創建的軟體環境，可以在單一硬體上模擬多個的計算機系統，例如在電腦上同時運行 Window 和 Linux 作業系統。因為建立虛擬機比建立實體機器更快更靈活、能夠更有效的共享資源、且彼此間據有隔離性，常被用來進行軟體和資安的測試。","uuid":"961174ca"},{"icon":"docker","name":"Docker & Cotainer","category":"作業系統","content":"容器 (Container)，是一種虛擬化技術，可以將應用程式和相依的環性進行封裝，能夠快速部署，在不同平台上運行，無需考慮硬體的差異。容器可以不包含完整的作業系統，使得相較於虛擬機，它能夠更輕量、且運行速度更快。但也因為核心沒有完全隔離，安全性較虛擬機低。 而 Docker，是一個開源的容器管理平台，以方便部署和管理容器。Docker 擁有很廣大的開發社群，在上面可以找到很多開源的映像檔，快速的建立想要的容器環境和解決方案。","uuid":"c12c9075"},{"icon":"language-python","name":"Python","category":"程式語言","content":"Python 是一個高階的程式語言，因為的它的語法簡潔、易於學習，加上擁有豐富的社群和第三方套件，能夠快速的被應用於各個領域，是目前最受歡迎的程式語言。Python 最常被用於資料科學、人工智慧的研究上。","uuid":"7f54d9e3"},{"icon":"language-java","name":"Java","category":"程式語言","content":"Java 是一個高階的物件導向程式語言，特點是它利用虛擬化的技術，讓程式碼能被部署在各個平台和作業系統上。因為是具有豐富的標準程式庫、語法較為嚴謹、且方便部署，常被應用於 Web 應用程式、企業級應用程式。即使程式語言龍頭的地位已被 Python 取代，仍是主流的程式語言。 小知識: Mincraft也是用Java寫的","uuid":"440120dc"},{"icon":"language-c","name":"C","category":"程式語言","content":"C 語言是通用的高階程式語言，因為同時具有高階語言的抽象性和低階的硬體控制能力，且運算效能非常好，被廣泛應用於系統程式和嵌入式系統，大多數的作業系統、編譯器都是用 C 語言寫的。  小知識: Python 的底層其實是 C","uuid":"38a3573c"},{"icon":"language-cpp","name":"C++","category":"程式語言","content":"C++ 是延伸自 C 語言的程式語言，並加入了物件導向程式設計的特性，支援了封裝和繼承，因此較 C 語言更容易撰寫及管理。C++ 也同樣保留了運行效率，因此很多系統程式、遊戲、大型專案仍是用 C++ 寫的。","uuid":"420400f7"},{"icon":"language-csharp","name":"C#","category":"程式語言","content":"C# 是由微軟開發的物件導向程式語言，想結合 C、C++、Java 的優點，具有簡潔、安全和高效的特性。C# 在 Microsoft .NET 框架中被廣泛使用，最常被用於桌面的應用程式和遊戲開發。C# 和 Java 都是企業愛用的程式語言。  C# 名稱的由來: 因為它是 C++ 的延伸那就再多兩個 + 號吧。C++++=C#","uuid":"86b00f77"},{"icon":"language-javascript","name":"JavaScript","category":"程式語言","content":"JavaScript 是一種高階、動態的程式語言，常用於網頁前端開發。可以在瀏覽器上執行、實現動態的效果、進行事件處理。因為有豐富內建函式庫和框架，也可用於伺服器端，因此是目前網頁、網路應用程式開發的主流語言。 小知識: JavaScript 其實跟 Java 並沒有親緣關係，兩者的語法和運行模式大相逕庭。","uuid":"873aa6a1"},{"icon":"content-save-outline","name":"Memory","category":"計算機","content":"記憶體 (Memory)，計算機中的重要部件，負責儲存、處理資料的讀寫。由於 CPU 的執行速度比讀取資料快得多，因此如何在儲存空間與存取速度上取得平衡，是處理記憶體架構的重要問題。分為主記憶體和輔助記憶體。","uuid":"8626c7ad"},{"icon":"view-grid-compact","name":"Main Memory","category":"計算機","content":"主記憶體 (Main Memory)，負責儲存執行中的資料，存取速度比硬碟快、但儲存空間較小。主記憶體的硬體通常是 DRAM (Dynamic random-access memory)，需要一直被通電和複寫才能保留資料，因此當電腦關機後主記憶體內的東西就會消失。","uuid":"a394be22"},{"icon":"harddisk","name":"Storage","category":"計算機","content":"次級儲存空間 (Storage)，是負責長期儲存資料的裝置。例如，硬碟 (磁碟機)、固態硬碟 (SD卡)、光碟 (CD\\\\DVD)，即便存取資料速度比主記憶體慢，但因為次級儲存空間有較大的儲存空間和較低的成本，且電腦關機後仍不會消失，適合儲存大量資料和檔案。","uuid":"09c9307f"},{"icon":"cpu-64-bit","name":"CPU","category":"計算機","content":"中央處理器 (Central Processing Unit, CPU)，是負責執行指令、運算和控制計算機的運作。它從主記憶體從讀取指令、解碼然後執行，再將計算結果存儲回記憶體。CPU 的性能(時鐘頻率、核心數、佔存器大小、耗電量)，會大大的影響系統的運行速度和效能。","uuid":"01e998d6"},{"icon":"expansion-card","name":"GPU","category":"計算機","content":"圖形處理器 （Graphics Processing Unit, GPU），是一種專門用於處理圖形和影像相關計算的硬體裝置。不同於CPU，GPU 僅負責處理數學計算，因此的結構更為單純，能夠平行處理大量資料，常用於繪製遊戲的影像。因為 AI 的訓練也需要大量的數學運算，因此 GPU 也用來做訓練加速。","uuid":"272b184e"},{"icon":"monitor-screenshot","name":"I/O Device","category":"計算機","content":"輸入輸出裝置 （Input/Output Device），指的是計算機系統中用於輸入輸出資料的裝置，讓使用者能夠與計算機互動，例如輸入指令、印出結果。常見的 I/O 裝置包括，鍵盤、滑鼠、螢幕顯示器、網路和印表機。","uuid":"7c67eb91"},{"icon":"bug","name":"網頁爬蟲","category":"網路","content":"網頁爬蟲是一種自動擷取網頁內容的程式，它能夠模擬瀏覽器行為，從網頁中提取數據，用於資料收集、分析和應用開發。","uuid":"1b5910ff"},{"icon":"ip-network-outline","name":"網路治理","category":"網路","content":"網路治理是指對網路運作和使用的規範和管理。它涉及網絡政策、數據隱私、網絡中立性等問題，以確保網絡的公平性、開放性和安全性。","uuid":"39465de8"},{"icon":"application-outline","name":"網頁開發","category":"網路","content":"網頁開發是指創建和維護網頁的過程。它涉及前端開發 （HTML、CSS、JavaScript）、後端開發（伺服器端語言、資料庫）和網頁設計等技術，用於構建互聯網上的網站和應用程式。","uuid":"f106a32a"},{"icon":"arrow-decision-outline","name":"HTTP/Restful","category":"網路","content":"HTTP（Hypertext Transfer Protocol）是一種用於在網際網路上傳輸資源的協定。Restful 是一種設計風格，通過 HTTP 協議實現服務端和客戶端之間的通訊，使系統資源可以被簡單、一致地訪問和操作。","uuid":"889a6aab"},{"icon":"firefox","name":"MozTW","category":"網路","content":"MozTW（Mozilla Taiwan Community、Mozilla 台灣社群）是台灣 Firefox 愛好者的實體社群，負責維護 Mozilla 軟體與網站的正體中文在地化，與 Mozilla 相關理念推廣。目前也同時在北市光華商圈經營摩茲工寮實體空間 ( https://moztw.space )，很多社群活動的籌會都會在摩茲舉行。","uuid":"1346c675"},{"icon":"shape-square-rounded-plus","name":"ADT","category":"資料結構","content":"抽象數據類型 （ADT）則是對資料結構的定義和操作。ADT 將數據結構和相應的操作封裝成一個整體，提供了抽象的數據操作界面，讓開發者能夠方便地使用和操作數據，如列表、堆疊、佇列等。","uuid":"0295158f"},{"icon":"human-queue","name":"Queue","category":"資料結構","content":"Queue（序列）是一種先進先出（FIFO）的資料結構。它類似於現實生活中的排隊概念，新的元素被添加到佇列的尾部，而從佇列中移除元素則從頭部開始。佇列常用於任務調度、事件處理等場景，提供了按照順序處理和管理數據的能力。","uuid":"6a09f58d"},{"icon":"layers-triple-outline","name":"Stack","category":"資料結構","content":"Stack（堆疊）是一種後進先出（LIFO）的資料結構。類似於現實生活中的堆書，新元素被添加到堆疊的頂部，而從堆疊中移除元素則從頂部開始。堆疊常用於追蹤函數呼叫、記錄歷史狀態等場景，提供了方便的數據存取和處理的方式。","uuid":"7fd9ca99"},{"icon":"link","name":"Linked List","category":"資料結構","content":"Linked List（鍊結串列）是一種動態的資料結構，由節點組成，每個節點包含數據和指向下一個節點的指標。它允許有效的插入和刪除操作，可以根據需要動態調整大小。連結列表常用於實現其他資料結構，如堆疊、佇列和圖等，提供靈活的數據存儲和操作方式。","uuid":"ce8fa3f8"},{"icon":"graph-outline","name":"Tree","category":"資料結構","content":"Tree（樹）是一種分層的非線性資料結構，由節點和邊組成。它具有一個根節點，每個節點可以有多個子節點，形成層次關係。樹常用於組織和表示層次性數據，如文件系統、組織架構等，提供了高效的搜索和遍歷操作，以及對層次結構的靈活操作。","uuid":"aa4661c4"},{"icon":"family-tree","name":"Binary Search Tree","category":"資料結構","content":"BST（Binary Search Tree，二元搜尋樹）是一種二元樹資料結構，其中每個節點最多有兩個子節點。BST 的特點是左子樹的值小於父節點，右子樹的值大於父節點，以此類推。BST 通常用於實現有效的查找和插入操作，提供了快速的搜尋和排序功能。","uuid":"f17fb282"},{"icon":"git","name":"Git","category":"軟體工程","content":"Git 是一個程式碼版本控制系統，用於追蹤和管理多人協作的專案。提供分支、合併和衝突化解等功能，讓專案的不同部件能夠同步開發，提高團隊的協作效率。Git 可說是成為軟體工程師的必備技能。 Git 的出現其實是 Linux 系統的創始人 Linus Torvalds 為了要更好的管理 Linux 核心開發而設計的 (別人的系統不好用，那就自己開發管理專案開發的專案)。","uuid":"3476d176"},{"icon":"github","name":"GitHub","category":"軟體工程","content":"GitHub 是一個基於 Git 版本控制系統的網絡平台，用於協作和管理程式碼。它提供了代碼存儲、版本控制、協作工具和項目管理功能，使開發人員能夠輕鬆地共享、追蹤和合作開發軟體項目，促進了開源社區和團隊協作的發展。","uuid":"621e25a3"},{"icon":"gitlab","name":"GitLab","category":"軟體工程","content":"GitLab 是一個開源的程式碼協作平台，提供基於 Git 的版本控制、代碼管理和持續集成/部署等功能。它結合了程式碼管理、問題追蹤、持續整合和容器託管等工具，讓團隊能夠在單一平台上進行軟體開發生命周期的管理，促進協作並提高效率。整個 Camp 的籌辦過程也是用 GitLab 進行進度追蹤的歐。","uuid":"5dd73d64"},{"icon":"api","name":"API","category":"軟體工程","content":"應用程式介面 （Application Programming Interface, API)，是負責應用程式間溝通的橋梁。提供一種簡潔的方式，來存取和操作其他應用程式。不需要知道對方實際是如何運作的，只需關注它能夠給予的資料或服務。可以快速的鏈結服務、擴展功能。例如: 利用telegram API 就可以串上 telegram bot、利用 Google maps API 就做一個客製化的地圖。","uuid":"f05f9f96"},{"icon":"application-cog","name":"SDK","category":"軟體工程","content":"軟體開發工具包 （Software Development Kit, SDK），提供了要建立應用程式所需的工具、環境、模擬器、程式庫和文件。讓開發人員能更專注在軟體本身，加速應用式的開發。例如: 寫 Java 會用到的JDK、寫 Android 會用的 Android SDK。","uuid":"92fe0ac9"},{"icon":"application-brackets","name":"IDE","category":"軟體工程","content":"整合開發環境 （Integrated Development Environment, IDE），提供一個單一的介面讓開發人員能夠便捷的使用軟體開發所需的工具，例如程式碼編輯器、除錯器、編譯器、版本控制系統、程式碼建議等。可以大幅提高開發的效率和品質。VScode、Pycharm (Python)、Intellij IDEA(Java) 都是常用 IDE。","uuid":"0a555393"},{"icon":"key","name":"對稱式加密","category":"密碼學","content":"對稱式加密是一種加密方式，利用相同的金鑰進行加密和解密。常見的對稱式加密演算法為 AES（Advanced Encryption Standard），當我們做壓縮檔加密的時就是使用 AES 演算法，必須要要輸入正確的密碼才能解壓縮。然而，對稱式加密並不適用於網路資料的加密，因為當對稱式金鑰被攔截時，訊息就會曝光。","uuid":"55c5d4d6"},{"icon":"key-chain","name":"非對稱式加密","category":"密碼學","content":"非對稱加密是一種加密方式，使用一對不同但相關的金鑰：公鑰和私鑰。公鑰用於加密資料，私鑰用於解密資料。這種加密方式的特點是，即使公鑰公開，也無法透過公鑰推算出私鑰。例如 RSA 是目前最常見的非對稱加密演算法。網址前墜 Https 中所指的s，就是資料有經過通訊加密，而此過程就需要經過 RSA 加密。","uuid":"eb099f1e"},{"icon":"set-merge","name":"雜湊函數","category":"密碼學","content":"雜湊函數 (Hash Function) 是一種函數，負責將任意大小的數據映射為固定大小散列值。雜湊函數具有以下特性 1. 固定長度輸出，無論輸入多長，輸出都會是固定長度 3. 不可逆性，無法從它的輸出反推輸入 4. 離散性，相似的輸入會有差異極大的輸出，而且不同輸入造成相同輸出的機率極小 5. 計算方便，即便輸入很長計算也很快 因為雜湊函數的這些特性，經常被用於資料庫的簡索、資料驗證、資料加密、區塊鏈等領域。而 SHA 系列的雜湊函數是目前最被廣泛使用的。","uuid":"73aabde0"},{"icon":"file-sign","name":"數位簽章","category":"密碼學","content":"數位簽章是一種用於驗證數位文件真實性和完整性的加密技術。同時會利用非對稱式(公私鑰)加密和雜湊函數兩種技術。發送者將文件經雜湊函數加密後，再用私鑰進行加密簽章。接著，同時發送原文件和簽章。接收者驗證時，用先用公鑰解密簽章，得到文章的雜湊值，再將原文件直接計算雜湊。因為私鑰只有發送者有，因此可以確定文章的真實性。而若資料經竄改，雜湊值必定不同，因此可確定內容的完整性。","uuid":"a5c6adc4"},{"icon":"regex","name":"計算機理論","category":"計算機理論","content":"正規表達式 (Regular expression, RE)，是用於字串匹配和文本搜尋的表達格式。因此可用簡單字串來描述符合指定格式的字串，在文本處理、編譯器、數據驗證、網絡爬蟲等領域都被廣泛應用。例如: 正規表達式的 [0-9]+，表示抓取所有數字。","uuid":"9f17eba5"},{"icon":"gate-not","name":"計算機理論","category":"計算機理論","content":"布林邏輯，是基於 AND、OR 和 NOT 等邏輯來操做布林值(真或假)。布林邏輯也是計算機科學和電機工程的基礎，和電路設計、程式設計和數據處理皆高度相關。","uuid":"94de71b8"},{"icon":"format-align-left","name":"計算機理論","category":"計算機理論","content":"資訊理論 (Information Theory)，電腦科學的一個分支。想運用機率論與數理統計的方法來研究訊息傳輸和訊息處理系統中的規律，以了解訊息傳輸的有效性和可靠性兩者間的關係。例如資料壓縮、資料編碼、異常檢測、自然語言處理都與資訊理論相關。","uuid":"d96213a9"},{"icon":"rotate-orbit","name":"計算機理論","category":"計算機理論","content":"計算機圖學是一個涉及數學、計算機科學和藝術的跨領域學科。主要研究如何使用電腦生成、處理和顯示圖像，研究算法和建模方式，以建構 3D 模型、進行圖像渲染、動畫等。在電影、CG、遊戲、工程設計和虛擬現實都被廣泛的應用。","uuid":"209663b3"},{"icon":"alphabetical","name":"計算機理論","category":"計算機理論","content":"ASCII （American Standard Code for Information Interchange），是標準化的字元編碼的方式，包括英文的大小寫字母、數字、標點符號和少數控制字符。由於 ASCII code 僅涵蓋英文，因此現在所使用的多半是 Unicode 編碼，涵蓋了世界上大部分的文字系統。(Unicode 的前 128 個就是 ASCII code)","uuid":"ada1714c"},{"icon":"","name":"OCF","category":"社群","content":"財團法人開放文化基金會 (Open Culture Foundation,簡稱 OCF) 成立的主要目的,是希望能夠藉由法人組織的力量，協助台灣資訊軟體界的開放源碼社群，包含開放原始碼軟體、開放資料、開放政府三個主要領域的發展和應用。除此之外，也期許能將開源自由的精神，更廣泛地應用在各個領域。因此,除了協助開源社群之外，基金會也協助民間企業、政府單位、非政府組織及學術單位，讓他們更能了解開源軟硬體的優勢、開放資料的重要性,進而在產、官、學三方推廣開源與開放協作的文化。","uuid":"19b221c5"},{"icon":"","name":"g0v","category":"社群","content":"gov 以「零」替代成為 g0v，從零重新思考政府的角色，也是代表數位原生世代從 0 與 1 世界的視野。g0v.tw 以開放原始碼的精神為基底，關心言論自由、資訊開放，寫程式提供公民更容易使用的資訊服務。資訊的透明化能幫助公民更確實了解政府運作、更快速了解議題，不被媒體壟斷，也才可有效監督政府，化為參與行動，最終深化民主體質。","uuid":"dcb4465a"},{"icon":"","name":"PyCon TW","category":"社群","content":"PyCon Taiwan 為一年一度由愛好者舉辦、討論並提倡使用 Python 程式語言的會議，聚焦在 Python 技術與其多樣的可能應用的交流。而今年PyCon TW 會在 9 月 2 日和 3 日於中央研究院人文社會科學館舉辦。","uuid":"86ea5e0b"},{"icon":"","name":"COSCUP","category":"社群","content":"COSCUP 是由台灣開放原始碼社群聯合推動的年度研討會，起源於 2006年，是台灣自由軟體運動 (FOSSM) 重要的推動者之一。活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工，所有議程都是免費參加。  此外，今年 COSCUP 如往常一樣，徵求各式各樣不同的 Open Source 相關稿件，歡迎有興趣的你/妳共襄盛舉。  開發者 (Coders)、使用者 (Users) 和推廣者 (Promoters) 是讓自由及開放原始碼軟體發光發熱的三大支柱，這個研討會就是專為這三種人舉辦的：你可以是 A 軟體的開發者、B 軟體的推廣者、C 軟體的使用者，不論你是已經踏入自由及開放原始碼軟體領域，還是一直站在門口不知如何入門，歡迎你來參加 COSCUP — Conference for Open Source Coders, Users and Promoters!","uuid":"f0d720f1"},{"icon":"","name":"GDSC","category":"社群","content":"GDSC (Google Developer Student Clubs) 是由 Google Developers 官方所支持的學生開發者社群。鼓勵各大專院校的學生們，在校園裡組織社群/社團，學習及討論 Google 提倡的開發技術，其中涵蓋 Android、Cloud、Web 及 AI/ML 等領域。","uuid":"119ced3e"},{"icon":"","name":"NTHUTS","category":"社群","content":"NTHUTS 清大資訊科學研習社（清資社），是清大的學生社團，透過舉辦資訊科學的相關課程、活動與營隊，帶動並推廣清大資訊教育的風氣。包含資安、開發、競程，三個教學小組，提供社員相關教學內容，以及參與比賽、開發專案的機會。清資社也會舉辦與資訊科學相關的工作坊，邀請業界、學術界專業人士來傳授技術與經驗，擴展社員視野、激發興趣。  組別介紹: －競技程式組專注於演算法研究，以及參加競技程式競賽如 ICPC、NCPC 等。 －資訊安全組研究資安相關理論及實務應用，並以參加 CTF 競賽為主軸，授課內容涵蓋密碼學、網頁安全、逆向工程、滲透測試、數位鑑識等課程。 －專案開發組主要研究資訊實務應用技術，學習軟體開發及前後端開發相關知識。","uuid":"5525f744"},{"icon":"","name":"SDC","category":"社群","content":"SDC 軟體開發社致力於建立一個開放的平台，讓志同道合的學員們相互學習、分享與軟體程式相關的知識技術。目前著重於研究軟體工程相關知識，透過每週的社課與學期間的工作坊，培養開發維運、網站架設的技能，讓學員獨立完成屬於自己的專案。","uuid":"eb136e30"},{"icon":"","name":"HITCON","category":"社群","content":"Hacks In Taiwan Conference 台灣駭客年會 (HITCON) 發起自 2005 年，是台灣最大的駭客與資安技術研討會。從 2014 年開始更分為兩個場次：HITCON Enterprise 以及 HITCON Community，期望可以滿足不同聽眾的各種需求。","uuid":"fbf1d903"},{"icon":"","name":"HITCON GIRLS","category":"社群","content":"HITCON GIRLS 是以女性為主的資安社群。希望聚集對資安感興趣、願意深入學習的女性，共同加入團隊探討知識與技術，推廣「大家都能學習資安！」的理念。主要組織各種不同主題的讀書會，透過合作與分享來來幫助成員們克服學習上的瓶頸。創造一個鼓勵並激發女性學習資安的環境，並增加科技產業的包容性。","uuid":"6b14026d"},{"icon":"file-table-box-multiple-outline","name":"SQL","category":"資料庫","content":"SQL (Structured Query Language)，是一種用於管理和操作關聯式數據庫的語言，透過 SELECT、INSERT、UPDATE和DELETE，或等結構化的語句進行操作，也可以結合指令進行更複雜的資料查詢和聚合。主流的關聯式資料庫管理系統如 MySQL、PostgreSQL、Oracle 都之持 SQL 語法。","uuid":"c123f754"},{"icon":"format-list-text","name":"NoSQL","category":"資料庫","content":"NoSQL，全稱非關聯式資料庫，是一種用於存儲和檢索大量非結構化和半結構化數據的數據庫技術。與傳統的關聯式資料庫相比，NoSQL 具有高擴展性、高可用性和靈活的數據模型，適用於大數據和分散式系統環境下的快速查詢和分析需求。","uuid":"bb2b554a"},{"icon":"format-text-wrapping-wrap","name":"CRUD","category":"資料庫","content":"CRUD 是一個常見的資料操作詞彙，代表創建 (Create)、讀取 (Read)、更新 (Update)和刪除 (Delete)。用於描述對於資料庫或 API 進行的基本操作，CRUD 提供了對資料的新增、查詢、更新和刪除的功能，是開發和操作資料的基礎操作。","uuid":"f6862586"},{"icon":"drawing","name":"NFT","category":"區塊鏈","content":"非同質化代幣 （Non-Fungible Tokens, NFT），是基於區塊鏈技術的數位資產。不同於加密貨幣，NFT 是獨一無二、不可替代的(非同質)。由於其不可竄改性，所有權的轉移能夠被追蹤，能夠卻保資產的真實性和不可變性。因此 NFT 在藝術、遊戲和虛擬地產中被廣為應用。","uuid":"393f5934"},{"icon":"ethereum","name":"以太坊","category":"區塊鏈","content":"以太坊 (Ethereum)是一個開源的區塊鍊平台，目標是成為連結加密貨幣與去中心化應用的平台。它是由以太幣驅動，具有自己的虛擬機器 (EVM)，可在其中執行智能合約，實現個類型的去中心化應用。如去中心化交易所、去中心化自治組織、遊戲及社交媒體。以太坊的出現為區塊鏈應用展開新的大門。","uuid":"010f630c"},{"icon":"bitcoin","name":"比特幣 Bitcoin","category":"區塊鏈","content":"比特幣 (Bitcoin)，是一種基於區塊鏈技術的加密貨幣，於 2008 年由中本聰發表論文，2009 年開始運行，是最早被實現的加密貨幣。因為具有匿名性、安全性、可追踪性，且可跨國家保質(無須匯率)，被視為是數位黃金。即便其法律定位仍具爭議，仍有些國家將其列為法定貨幣。","uuid":"ffb6d444"},{"icon":"virtual-reality","name":"AR/VR/MR","category":"元宇宙","content":"擴增實境 (AR)、虛擬實境 (VR)、混和實境 (MR)，可被統稱為延展實境 (XR)，指將虛擬與現實進行交融合的技術。 1. 擴增實境 (AR): 藉由螢幕或顯示器，在現實世界中擴增虛擬的實體。 2. 虛擬實境 (VR): 利用沉浸式裝置，建構完全虛擬世界。 4. 混和實境 (MR): 結合 AR/VR，讓虛實完全融合，現實影響虛擬、虛擬影響現實。","uuid":"699ef4f7"},{"icon":"account-switch-outline","name":"數位孿生","category":"元宇宙","content":"數位孿生 (Digital Twin)，是指利用數據和模擬技術，在虛擬世界中，創建現實實體的虛擬副本。用於預測物體、產品或系統的行為，提供準確的數據。並可在模擬中進行優化和仿真測試，因此大量節省於現實中測試所造成的時間和資源成本。可被應用於模擬製造、城市規劃、建築、醫療等領域。","uuid":"9192a7b2"},{"icon":"link-box-variant-outline","name":"區塊鍊","category":"元宇宙","content":"區塊鏈是一種分散式數據存儲和交易記錄技術，數據以區塊的形式連結成鏈。它使用加密和共識算法，實現去中心化的可信數據交換和驗證，保護數據的完整性和安全性。區塊鏈廣泛應用於加密貨幣、智能合約和數字身份等領域。","uuid":"5ca4cae3"},{"icon":"ceiling-light-multiple-outline","name":"物聯網","category":"元宇宙","content":"物聯網與元宇宙技術的整合結合了現實世界的物理設備和虛擬世界的多維度體驗。通過物聯網的連接和數據交互，將現實世界的感測器、設備和物體帶入元宇宙，實現更深度的互動、監測和控制，創造出更豐富、真實的虛擬體驗。","uuid":"4c594866"},{"icon":"spear","name":"量子演算法","category":"量子","content":"量子演算法，利用量子疊加、量子干涉和量子糾纏等特性，使得量子演算法可以在特定情況下比傳統的演算法更快速地解決問題，具有潛力改變計算和通信的能力。因此常被應用於因子分解、最佳化問題。如 Shor 演算法即可在幾秒內破解目前的 RSA 密碼系統 (以古典演算法需花億年時間破解)。","uuid":"238b5be5"},{"icon":"safe-square-outline","name":"後量子密碼學","category":"量子","content":"後量子密碼學旨在解決在量子計算時代下，傳統密碼學面臨的安全性挑戰。它探索使用抗量子攻擊的密碼算法和協議，以確保數據的機密性、完整性和認證性。後量子密碼學的目標是保護數據免受未來量子計算攻擊的威脅，確保數據的安全性和隱私性。","uuid":"b8cc6ec8"},{"icon":"chip","name":"雲端運算/邊緣運算","category":"雲端運算/邊緣運算","content":"嵌入式系統是指嵌入到其他設備或系統中的專用電腦系統，通常用於控制、監測或執行特定功能。這些系統具有小型化、低功耗和高效能的特點，常見應用於家電、汽車、醫療設備等領域。","uuid":"2045d742"},{"icon":"cloud-braces","name":"雲端運算/邊緣運算","category":"雲端運算/邊緣運算","content":"雲端服務有，根據使用者所需管理的資源層面分成 3 種不同的服務類型。 IaaS 基礎設施即服務: 提供了一個完整的虛擬化基礎架構，包括虛擬機器、儲存空間和網路資源。 Paas 平台即服務: 提供了開發和運行應用程式的平台，包括運行環境、開發工具和資料庫。使用者可以使用這些平台來開發。 SaaS 軟體即服務: 提供了已經構建好並且可直接使用的軟體應用程式，使用者可以透過網路直接存取這些應用程式。","uuid":"ebafe939"},{"icon":"vector-triangle","name":"資訊安全三要素","category":"資訊安全","content":"資訊安全的三要素是機密性、完整性和可用性。機密性確保資訊只能被授權人員訪問；完整性確保資訊在傳輸和存儲過程中不被篡改；可用性確保資訊和系統隨時可用，不受故障或攻擊的影響。這些要素共同保護資訊資產的安全。","uuid":"8ba12eff"},{"icon":"eye-circle-outline","name":"影像辨識","category":"人工智慧","content":"影像辨識利用計算機視覺和機器學習技術，使機器能夠識別和分析圖像和視頻中的對象、場景和特徵，應用於人臉識別、物體檢測和影像分類等領域。","uuid":"93e0b609"},{"icon":"brush-outline","name":"生成式AI","category":"人工智慧","content":"生成式人工智慧是指利用機器學習和生成模型生成新的數據、圖像或文本，創造出與現實世界相似但又全新的內容，如圖像生成 (Midjourney、DALL-E-2)、音樂生成 (Music LM) 和文本生成 (Chat-GPT) 等。","uuid":"8b65bc3f"},{"icon":"message-processing-outline","name":"自然語言處理NLP","category":"人工智慧","content":"自然語言處理研究如何使機器能夠理解和處理人類的自然語言，包括語音識別、語義理解和語言生成等。各種語言模型如 Chat-GPT 就是屬於自然語言處理的範疇。","uuid":"e7e6da64"},{"icon":"brain","name":"深度學習","category":"人工智慧","content":"深度學習技術利用深度神經網絡進行學習和特徵提取，能夠處理更複雜的數據和任務，如圖像識別、語音合成和自然語言處理。","uuid":"e62f9b9a"},{"icon":"vector-polygon","name":"機器學習","category":"人工智慧","content":"通過讓機器自動學習和改進，從大量的數據中發現模式和規律，以做出預測和決策，如監督學習、非監督學習和強化學習等。","uuid":"5f3316ba"},{"icon":"weather-cloudy-arrow-right","name":"雲端遊戲技術","category":"遊戲開發","content":"雲端遊戲是一種新興的遊戲開發技術，使玩家能夠透過串流媒體的方式遊玩遊戲，而無需在本地設備上進行安裝，因此能提供更大的遊戲規模和更高的圖形品質。開發者需要關注雲端伺服器的性能、網絡延遲和安全性等問題，以提供穩定和流暢的遊戲體驗。","uuid":"72781497"},{"icon":"format-color-fill","name":"即時渲染技術","category":"遊戲開發","content":"即時渲染是遊戲開發中關鍵的圖形處理技術。在遊戲運行時即時生成逼真光影、材質和粒子效果等。使遊戲能夠呈現更生動與逼真的視覺效果，並提升玩家的沉浸感和遊戲體驗。開發者需要優化渲染流程、採用有效的渲染算法，以確保遊戲在不同平台上運行順暢。","uuid":"5fc2743a"}]')}},function(e){e.O(0,[344,298,253,769,744],function(){return e(e.s=3891)}),_N_E=e.O()}]);