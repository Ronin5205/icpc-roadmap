Open `../index.html` to start the ICPC roadmap. Keep the root entry point and this `src` folder together when copying or publishing the site.

```text
index.html                 Roadmap overview and linked diagrams
src/
  topics.html              Directory of all 56 topics
  01_PRELIMINARIES.html     Foundations and practice
  02_REGIONALS.html         Regional toolkit
  03_CHAMPIONSHIP.html      Advanced techniques
  04_WORLD_FINALS.html      Specialist topics
  06_PAST_PAPERS.html       Searchable past-paper gallery
  09_TRAINING_ROUTINE.html  Training routines
  README.html              About the roadmap
  *.svg                    Standalone prerequisite diagrams
  paper-gallery.js          Optional search and filters
  research/                Editable content, source catalogues, and generation scripts
```

All guides and gallery cards are static HTML. They remain readable without JavaScript. Search and filters enhance the gallery when JavaScript is available. Statements, videos, and analyses are linked to their external publishers and require internet access.

To serve the package locally, run `python -m http.server 8000` from the directory containing `index.html`, then open `http://localhost:8000`.

To regenerate and validate content from that same directory:

```powershell
python src/research/enrich_roadmap.py
python src/research/build_paper_gallery.py
python src/research/validate_content.py
python src/research/audit_paper_links.py
```

Edit `src/research/past_papers.json` to maintain the gallery. Packet types distinguish full contests, short practice sessions, and specialist supplements. Analysis links and reviewed problem mappings start behind spoiler controls.
